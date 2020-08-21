import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity])],
    controllers: [ProductController],
    providers: [ProductService]
})

export class ProductModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {

    }
}