class Node<K, V> {
  key: K
  value: V
  prev:Node<K,V> | null = null;
  next: Node<K,V> | null = null
  constructor(key?:K,value?:V){
    this.key =key as K 
    this.value = value as V
  }
}

export class LRUCache<K, V> {
  private map = new Map<K,Node<K,V>>
  private head:Node<K,V>
  private tail:Node<K,V>
  private size = 0;


  constructor(private limit: number) {
    this.head = new Node<K, V>()
    this.tail = new Node<K, V>()
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

   addNode(node: Node<K, V>) {

    node.prev = this.head;
    node.next = this.head.next;
    if (this.head.next) this.head.next.prev = node;
    this.head.next = node;
  }

  removeNode(node:Node<K,V>){
    if(node.prev) node.prev.next = node.next
    if(node.next) node.next.prev = node.prev
    node.prev = node.next = null;
  }

  moveToFront(node:Node<K,V>){
    this.removeNode(node)
    this.addNode(node)
  }

  get(key:K){
    let node = this.map.get(key)
    if(!node) return undefined;
    this.moveToFront(node)
    return node.value
  }

  set(key: K, value: V) {
    let node = this.map.get(key)
    if(node){
      node.value = value
      this.moveToFront(node)

    }else{
      node = new Node(key,value)
      this.addNode(node)
      this.map.set(key,node)
      this.size++;
      if(this.size > this.limit){
      const lru = this.tail.prev!;
      this.removeNode(lru)
      this.map.delete(lru.key)
      this.size--;
    }
   }    
  }
 
  getLru(): V | undefined {
    const lruNode = this.tail.prev;
    if(!lruNode) return ;
    return lruNode.value;
  }

  getMru(): V | undefined {
    const mruNode = this.head.next;
    if(!mruNode) return ;
    return mruNode.value
  }

  has(key: K): boolean {
    return this.map.has(key);
  }
}