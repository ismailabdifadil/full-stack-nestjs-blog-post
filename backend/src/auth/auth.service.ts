import { Injectable, UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create.users.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(userData: CreateUserDto) {
    const user = await this.usersService.create(userData);
    const payload = { email: user.email, sub: user._id };
    const token = await this.jwtService.signAsync(payload);
    const { password, ...result } = user;
    return { ...result, accessToken: token };
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
    const token = await this.jwtService.signAsync(payload);
    return {
      ...user,
      accessToken: token,
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
