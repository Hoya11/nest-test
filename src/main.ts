import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, //양식에 맞지 않으면 거부
      transform: true, // 타입을 받아서 넘겨줄 때 자동으로 변환해줌 (url 값은 기본적으로 string인데 api에 number로 되어있으면 받아올때 number로 변환해서 값을 줌)
    }),
  );
  await app.listen(3000);
}
bootstrap();
