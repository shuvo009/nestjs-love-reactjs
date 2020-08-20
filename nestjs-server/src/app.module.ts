import { Module } from '@nestjs/common';
import { ProductModule } from './product';
import { TypeOrmModule } from "@nestjs/typeorm";
import { configService } from "./config/ConfigService";

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ProductModule
  ]
})
export class AppModule { }
