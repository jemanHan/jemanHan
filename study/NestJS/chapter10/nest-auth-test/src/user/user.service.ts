import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  createUser(user): Promise<User> {
    return this.userRepository.save(user);
  }
  // 이메일로 단일 유저
  async getUser(email: string) {
    const result = await this.userRepository.findOne({
      where: { email },
    });
    return result;
  }

  // 이메일로 업데이트
  async updateUser(email, _user) {
    const user = await this.getUser(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    console.log(_user);
    user.username = _user.username;
    user.password = _user.password;
    console.log(user);
    return this.userRepository.save(user);
  }

  // 이메일로 삭제
  deleteUser(email: any) {
    return this.userRepository.delete({ email });
  }
}
