import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authSerivce: AuthService) {
        super({usernameField: 'email'})
    }
    async validate(email: string, password: string): Promise<any>
{
    const user = await this.authSerivce.validateUser(email, password)
    if(!user) {
        return null;
    }
    return user;
}}