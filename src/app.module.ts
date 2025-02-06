import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [PrismaModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [PrismaModule],
})
export class AppModule {}
