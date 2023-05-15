import { Controller, Get, Res, Sse } from '@nestjs/common';
import { GraphicService } from './graphic.service';
import { interval, map } from 'rxjs';

@Controller()
export class GraphicController {
  constructor(private readonly graphicService: GraphicService) {}

  @Sse('graphic')
  generateGraphic() {
    return interval(2000).pipe(
      map((_) => ({ data: this.graphicService.generateGraphic() })),
    );
  }
}
