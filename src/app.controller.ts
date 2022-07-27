import { Controller, Get, Render, Sse } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  index() {
    return { message: 'Testing template rendering with nunjucks' };
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(5000).pipe(
      map(() => ({ data: 'Server-Sent Event' } as MessageEvent)),
    );
  }
}
