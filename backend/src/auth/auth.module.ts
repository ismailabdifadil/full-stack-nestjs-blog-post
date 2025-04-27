import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtAuthGuard } from './guards/auth-guard';

<<<<<<< HEAD
const secret = 'THE_DIINSAALOW_SECRET_KEY';

=======
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
@Module({
  imports: [
    UsersModule,
    JwtModule.register({
<<<<<<< HEAD
      global: true,
      secret: secret,
=======
      secret: process.env.JWT_SECRET || 'your-secret-key',
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard],
  exports: [AuthService, JwtAuthGuard],
})
export class AuthModule {}
