import { Injectable } from "@nestjs/common";
import { Productdto } from "src/Dynamiclru/dto/user.dto";

@Injectable()
export class LruServices {
  private cache = new Map<number, Productdto>();
  private capacity = 5;

  get(key: number): Productdto | string {
    const value = this.cache.get(key);
    if (!value) return `${key} is not present`;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(dto: Productdto): string {
    if (dto.id === undefined || dto.id === null) return "Invalid product ID";

    if (this.cache.size === this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(dto.id, dto);
    return "Data added";
  }

  findAll() {
    return Array.from(this.cache.entries());
  }
}
