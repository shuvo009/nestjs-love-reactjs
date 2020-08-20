import { Controller, Param, Get, Post, Body, Put, Delete } from '@nestjs/common'
import { CreateProductDto, UpdateProductDto } from "./dto";
import { ProductService } from "./product.service"
import { Product } from "./product.interface"

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    getProduct(): Promise<Product[]> {
        return this.productService.getProducts();
    }

    @Post()
    createProduct(@Body() data: CreateProductDto): Promise<void> {
        return this.productService.createProduct(data);
    }

    @Put(':id')
    updateProduct(@Param('id') productId: string, @Body() data: UpdateProductDto): Promise<void> {
        return this.productService.updateProduct(productId, data);
    }


    @Delete(':id')
    deleteProduct(@Param('id') productId: string): Object {
        return this.productService.deleteProduct(productId);
    }
}