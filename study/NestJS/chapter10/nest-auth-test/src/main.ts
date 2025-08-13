import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser = require('cookie-parser');  
import session = require('express-session');
import passport = require('passport'); 


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.use(cookieParser());                       

  app.use(session({
    secret: 'very-important-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 }, // 1h
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
