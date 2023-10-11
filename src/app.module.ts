import { ServeStaticModule } from '@nestjs/serve-static';
import { SseService } from './services/sse/sse.service';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, SseService]
})
export class AppModule {}
