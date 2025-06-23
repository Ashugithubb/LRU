import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LruServices } from "./lru.services";

@Controller('lru')
export class LruController<T> {
  constructor(private readonly lruservices: LruServices<T>) {}

  @Post(':type')
  create(@Param('type') type: string, @Body() data: T) {
    return this.lruservices.create(type, data);
  }

  @Get(':type')
  findAll(@Param('type') type: string) {
    return this.lruservices.FindAll(type);
  }

  @Get(':type/:id')
  findOne(@Param('type') type: string, @Param('id') id: string) {
    return this.lruservices.FindOne(type, (Number)(id));
  }

  @Put(':type/:id')
  update(@Param('type') type: string, @Param('id') id: string, @Body() data: Partial<T>) {
    return this.lruservices.Update(type, (Number)(id), data);
  }

  @Delete(':type/:id')
  delete(@Param('type') type: string, @Param('id') id: string) {
    return this.lruservices.Delete(type, (Number)(id));
  }

  @Put(':type/:id/upsert')
  upsert(@Param('type') type: string, @Param('id') id: string, @Body() data: T) {
    return this.lruservices.Upsert(type, (Number)(id), data);
  }

  @Get('lru')
  getLru() {
    return this.lruservices.GetLru();
  }

  @Get('mru')
  getMru() {
    return this.lruservices.GetMru();
  }
}