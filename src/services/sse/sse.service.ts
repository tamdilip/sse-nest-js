import { Injectable, Logger } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class SseService {

    private readonly logger = new Logger(SseService.name);
    private readonly connections = new Map<string, Subject<string>>();

    @Cron('*/2 * * * * *')
    handleCron() {
        const userId = Math.floor((Math.random() * 5) + 1);
        this.logger.log(`CRON:: Emitting scheduled event for user id: ${userId} !`);
        this.emit(userId.toString(), `New message for user ${userId} at ${new Date()}`);
    }

    subscribe(userId: string): Observable<string> {
        const subject = new Subject<string>();
        this.connections.set(userId, subject);
        this.logger.log(`SUBSCRIBE:: Subscription added for user id: ${userId} !`);
        return subject;
    }

    emit(userId: string, event: string) {
        const connection = this.connections.get(userId);
        if (connection) {
            this.logger.log(`EMIT:: Event published for user id: ${userId} !`);
            connection.next(event);
        } else {
            this.logger.log(`EMIT:: No connection available for user id: ${userId} to emit.`);
        }
    }

    disconnect(userId: string) {
        const connection = this.connections.get(userId);
        if (connection) {
            connection.complete();
            this.connections.delete(userId);
            this.logger.log(`DELETE:: Connection deleted for user id: ${userId} !`);
        } else {
            this.logger.log(`DELETE:: No connection available for user id: ${userId} to delete.`);
        }

        return `Disconnected user id ${userId} !`;
    }
}
