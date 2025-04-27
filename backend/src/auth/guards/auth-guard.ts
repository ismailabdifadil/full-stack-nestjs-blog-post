import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    console.log('Auth header:', authHeader);

    if (!authHeader) {
      throw new UnauthorizedException('No authorization header');
    }

    const token = authHeader.split(' ')[1];
    console.log('Extracted token:', token);

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      console.log('Attempting to verify token...');
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'THE_DIINSAALOW_SECRET_KEY',
      });
      console.log('Token verified successfully. Payload:', payload);
      request.user = payload;
    } catch (error) {
      console.error('Token verification failed:', error.message);
      throw new UnauthorizedException('Invalid token');
    }
    return true;
  }
}
