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
<<<<<<< HEAD
    const payload = { email: user.email, sub: user._id };
    const token = await this.jwtService.signAsync(payload);
    const { password, ...result } = user;
    return { ...result, accessToken: token };
=======
    const accessToken = await this.jwtService.signAsync({ email: user.email });
    const { password, ...result } = user;
    return { ...result, accessToken };
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
<<<<<<< HEAD
    const token = await this.jwtService.signAsync(payload);
    return {
      ...user,
      accessToken: token,
=======
    return {
      ...user,
      accessToken: this.jwtService.sign(payload),
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
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
