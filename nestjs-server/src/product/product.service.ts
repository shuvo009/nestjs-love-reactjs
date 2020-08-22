import { Injectable } from "@nestjs/common";
import { CreateProductDto, UpdateProductDto } from "./dto"
import { Product } from "./product.interface"
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from "./product.entity";
@Injectable()
export class ProductService {

    constructor(@InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>) {

    }

    async getProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async createProduct(productDto: CreateProductDto): Promise<void> {
        const product = new ProductEntity();
        product.name = productDto.name;
        product.price = productDto.price;
        product.quantity = 0;
        
        await this.productRepository.save(product);
    }

    async updateProduct(productId: string, product: UpdateProductDto): Promise<void> {
        let toUpdate = await this.productRepository.findOne(productId);
        toUpdate.quantity = product.quantity;
        toUpdate.name = product.name;
        toUpdate.price = product.price;
        await this.productRepository.save(toUpdate);
    }

    async deleteProduct(productId: string): Promise<void> {
        await this.productRepository.delete({ id: productId });
    }

}
