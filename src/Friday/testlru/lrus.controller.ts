import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { LruServices } from "./lrus.services";
import { Productdto } from "src/Friday/Dynamic_lru/dto/user.dto";

@Controller("test")
export class LruController{
    constructor(private readonly repo : LruServices){}
    @Get(":id")
    get(@Param('id') id:number){
        return this.repo.get(id);
    }
    @Post()
    put(@Body()dto:Productdto){
        return this.repo.put(dto);
    }
    @Get()
    findAll(){
        return this.repo.findAll();
    }
}