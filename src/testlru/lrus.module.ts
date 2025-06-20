import { Module } from "@nestjs/common";
import { LruServices } from "./lrus.services";
import { LruController } from "./lrus.controller";

@Module({
    providers:[LruServices],
    controllers:[LruController]
})
export class LruModule{}