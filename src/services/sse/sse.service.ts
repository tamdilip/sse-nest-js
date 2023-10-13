import { Injectable, Logger } from '@nestjs/common';
import { Observable, fromEvent } from 'rxjs';
import { Cron } from '@nestjs/schedule';
import { EventEmitter } from 'events';

@Injectable()
export class SseService {

    private readonly emitter = new EventEmitter();
    private readonly logger = new Logger(SseService.name);

    @Cron('*/2 * * * * *')
    emit() {
        const userId = Math.floor((Math.random() * 5) + 1);
        this.logger.log(`CRON:: Emitting scheduled event for user id: ${userId} !`);
        this.emitter.emit(userId.toString(), `New message for user ${userId} at ${new Date()}`);
    }

    subscribe(userId: string): Observable<any> {
        this.logger.log(`SUBSCRIBE:: Subscription added for user id: ${userId} !`);
        return fromEvent(this.emitter, userId);;
    }
}
