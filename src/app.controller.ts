import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/* Controller의 역할
  💡 controller는 그저 URL을 가져오고, 함수를 반환하는 역할을 한다!
  💡 그 함수는 비즈니스 로직이며, service에 있다.
*/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // 왜 service를 참조하고 함수를 반환할까? ->
    // nestjs는 controller를 비즈니스 로직과 분리하고 싶어한다.
    return this.appService.getHello();
  }

  // 데코레이터는 꾸며줄 함수나 클래스와 붙어 있어야 한다
  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
}
