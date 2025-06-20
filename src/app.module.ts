import { Module } from '@nestjs/common';
import { RepoModule } from './Dynamic_lru/repo.module';
import { LruModule } from './testlru/lrus.module';

@Module({
  imports: [RepoModule,LruModule],
  
})
export class AppModule {}
