import { Module } from '@nestjs/common';
import { ProductModule } from './product';

@Module({
  imports: [ProductModule]
})
export class AppModule { }
