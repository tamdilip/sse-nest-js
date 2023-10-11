import { Controller, Delete, Get, Param, Sse } from '@nestjs/common';
import { SseService } from './services/sse/sse.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sseService: SseService
  ) { }

  @Get('health')
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Get('sse/:userId')
  @Sse()
  async createSse(@Param('userId') userId: string) {
    return this.sseService.subscribe(userId);
  }

  @Delete('sse/:userId')
  async deleteSse(@Param('userId') userId: string) {
    return this.sseService.disconnect(userId);
  }
}
