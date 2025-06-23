import { Injectable, NotFoundException } from "@nestjs/common";
import { LRUCache } from "./lru";

@Injectable()
export class LruServices<T>{
    private database = new LRUCache<string,T[]>(5);

  private ensureCollection(type: string) {
    if (!this.database.has(type)) {
      this.database.set(type, []);
    }
  }

  create(type: string, data: T) {
    this.ensureCollection(type);
    const collection = this.database.get(type)!;
    const id = collection.length + 1;
    const newItem = { id, ...data };
    
    collection.push(newItem);
    this.database.set(type, collection); 
    return newItem;
  }

  findAll(type: string) {
    return this.database.get(type) || [];
  }

  findOne(type: string, id: number) {
    const collection = this.database.get(type);
    if (!collection) throw new NotFoundException(`No type: ${type}`);
    const item = collection.find((item:any) => item.id === id);
    return item;
  }

  update(type: string, id: number, data) {
    const collection = this.database.get(type);
    if (!collection) throw new NotFoundException(`No type: ${type}`);
    const index = collection.findIndex((item:any) => item.id === id);
    collection[index] = { ...collection[index], ...data };
    this.database.set(type, collection); 
    return{message:"Updated"};
  }

  delete(type: string, id: number) {
    const collection = this.database.get(type);
    if (!collection) throw new NotFoundException(`No type: ${type}`);
    const index = collection.findIndex((item:any) => item.id === id);
    collection.splice(index, 1);
    this.database.set(type, collection); 
    return {message: "deleted"}
  }

  upsert(type: string, id: number, data: T) {
    const collection = this.database.get(type);
    if (collection && collection.some((item:any) => item.id === id)) {
      return this.update(type, id, data);
    } else {
      return this.create(type, { ...data, id });
    }
  }

  getLru(): T[] | undefined {
    return this.database.getLru();
  }

  getMru(): T[] | undefined {
    return this.database.getMru();
  }
}
