import { Controller, Module } from "@nestjs/common";
import { Repo } from "./repo.services";
import { RepoController } from "./repo.controller";

@Module({
    providers:[Repo],
    controllers:[RepoController]
})
export class RepoModule{
    
}