import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { userInfo } from "os";
import { UserService } from "src/user/user.service";

@Injectable()
//PassportSerializer 상속 받음
export class SessionSerialzer extends PassportSerializer {
    constructor(private UserService: UserService) {
        super();
    }

    serializeUser(user: any,done:(err: Error, user:any)=> void): any{
        done(null as any, user);

    }

async deserializeUser(
    payload: any,
    done: (err: Error, payload:any) => void,
): Promise<any>
 {
    const user = await this.UserService.getUser(payload)

    if(!user) {
        done(new Error('no User'), null)
        return
    }
    const { password, ...userInfo} = user;
    done(null as any, user);

 }
}
