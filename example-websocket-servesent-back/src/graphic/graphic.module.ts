import { Module } from '@nestjs/common';
import { GraphicService } from './graphic.service';
import { GraphicController } from './graphic.controller';

@Module({
  controllers: [GraphicController],
  providers: [GraphicService]
})
export class GraphicModule {}
