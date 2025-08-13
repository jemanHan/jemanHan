import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
//PassportStrategy(Strategy) 상속
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    //부모 클래스 생성자 호출
    super({
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: 'http://localhost:3000/auth/google',
      scope: ['email', 'profile'],
      passReqToCallback: false, // 또는 true (req 필요하면)
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { id, name, emails } = profile;
    console.log(accessToken);
    console.log(refreshToken);

    const providerId = id;
    const email = emails?.[0]?.value || null;

    const user: User = await this.userService.findByEmailOrSave(
      email,
      `${name?.familyName ?? ''}${name?.givenName ?? ''}`,
      providerId,
    );
    return user;
  }
}
