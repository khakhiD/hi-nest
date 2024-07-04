import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  /* 
    controller:
    - URL을 가져오고 함수를 실행함
    - express의 라우터와 같은 존재
  */
  controllers: [AppController],
  /* 
    provider:
    - 
  */
  providers: [AppService],
})
export class AppModule {}
