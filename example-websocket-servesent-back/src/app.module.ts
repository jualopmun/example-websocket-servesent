import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { GraphicModule } from './graphic/graphic.module';

@Module({
  imports: [ChatModule, GraphicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
