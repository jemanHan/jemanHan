import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'node:http';

@Injectable() //inj~~ 있으니 프로바이더
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  //CanActivate 인터페이스 메서드
  async canActivate(context: any): Promise<boolean> {
    //컨텍스트에서 리퀘스트 정보 가져옴
    const request = context.switchToHttp().getRequest();

    //쿠키가 있으면 인증된것
    if (request.cookies['login']) {
      return true;
    }

    if (request.body.email || !request.body.password) {
      return false;
    }

    //인증 로직은 기존의 authService, validateUser 사용
    const user = await this.authService.validateUser(
      request.body.email,
      request.body.password,
    );

    if (!user) {
      return false;
    }
    request.user = user;
    return true;
  }
}

@Injectable()
// AuthGuard 상속
export class LocalAuthGuard extends AuthGuard('local'){
  async canActivate(context: any):Promise<boolean>{
    const result = (await super.canActivate(context)) as boolean
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return result;
  }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate{
  canActivate(context: ExecutionContext): boolean{
    const request = context.switchToHttp().getRequest();
    return request.isAuthenticated();
  }
}
