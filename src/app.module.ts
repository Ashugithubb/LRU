import { Module } from '@nestjs/common';
import { RepoModule } from './Friday/Dynamic_lru/repo.module';
import { LruModule } from './Friday/testlru/lrus.module';
import { LruModule2 } from './updatedlru/lru.module';

@Module({
  imports: [RepoModule,LruModule,LruModule2],
  
})
export class AppModule {}
