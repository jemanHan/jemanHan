import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { SessionSerialzer } from './session.serializer';
import { LocalStrategy } from './loacl.strategt';


@Module({
  imports: [UserModule, PassportModule.register({session: true})],
  providers: [AuthService, LocalStrategy, SessionSerialzer],
  controllers: [AuthController],
})
export class AuthModule {}
