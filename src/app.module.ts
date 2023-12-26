/* eslint-disable  */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true })//this is goig to make the dotenv properties available globally
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
