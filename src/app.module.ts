import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';

import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/develop'),
    MulterModule.register({
      storage: diskStorage({
        destination: join(__dirname, '..', 'public/uploads'),
        filename: (req, file, cb) => {
          const filename = `${Date.now()}.${file.mimetype.split('/')[1]}`;
          return cb(null, filename);
        },
      }),
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
    AuthModule,
    UsersModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
