import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/user.dto';
import { AuthService } from './auth.service';import { AuthenticatedGuard, LocalAuthGuard, LoginGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() userDto: CreateUserDto) {
    return await this.authService.register(userDto);
  }

  @Post('login')
  async login(@Request() req, @Response() res) {
    //REQ,RES 둘다 사용
    const userInfo = await this.authService.validateUser(
      req.body.email,
      req.body.password,
    );

    //유저 정보 있으면 쿠키 정보를 RES에 저장
    if (userInfo) {
      res.cookie('login', JSON.stringify(userInfo), {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
    }
    return res.send({ message: 'login success' });
  }

  @UseGuards(LoginGuard)
  @Post('login2')
  async login2(@Request() req, @Response() res) {
    //쿠키 정보는 없지만 request에 user정보가 있으면 응답값에 키정보 추가
    if (!req.cookies['login'] && req.user) {
      res.cookie('login', JSON.stringify(req.user), {
        httpOnly: true,
        maxAge: 1000 * 10,
      });
    }
    return res.send({ message: 'login2 success' });
  }
  @UseGuards(LoginGuard)
  @Get('test-guard')
  testGuard() {
    return '로그인된 때만 이 글이 보임';
  }

  @UseGuards(LocalAuthGuard)
  @Post('login3')
  login3(@Request() req){
    return req.user
  }

  @UseGuards(AuthenticatedGuard)
  @Get('test-guard2')
  testGuardWithSession(@Request() req){
    return req.user
  }
}
