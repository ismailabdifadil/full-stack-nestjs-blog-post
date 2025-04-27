import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
<<<<<<< HEAD
import { PostsModule } from './posts/posts.module';
=======
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
const configService = new ConfigService();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(configService.get<string>('MONGODB_URI')!),
    UsersModule,
    AuthModule,
<<<<<<< HEAD
    PostsModule,
=======
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
