import { Module } from "@nestjs/common";
import { LruServices } from "./lru.services";
import { LruController } from "./lru.controller";

@Module({
    providers:[LruServices],
    controllers:[LruController]

})
export class LruModule2{

}