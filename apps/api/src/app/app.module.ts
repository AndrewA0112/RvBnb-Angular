

import { Module } from '@nestjs/common';

import { AppService } from './app.service';

import { AppController } from './app.controller';
import { ListingsModule } from './listings/listings.module';

@Module({
   imports: [ListingsModule],
   controllers: [AppController],
   providers: [AppService]
})
export class AppModule { }