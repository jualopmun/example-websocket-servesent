import { Injectable } from '@nestjs/common';
import * as moment from 'moment';

@Injectable()
export class GraphicService {
  generateGraphic() {
    const numberRandow = () => Math.floor(Math.random() * 1000) + 1;
    return {
      name: moment(new Date()).format('DD/MM/YYYY HH:mm:ss'),
      uv: numberRandow(),
      pv: 2400,
      amt: 2400,
    };
  }
}
