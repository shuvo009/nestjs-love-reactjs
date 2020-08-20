import { Injectable } from "@nestjs/common";
import { CreateProductDto, UpdateProductDto } from "./dto"
import { Product } from "./product.interface"

@Injectable()
export class ProductService {

    async getProducts(): Promise<Product[]> {
        return [];
    }

    async createProduct(product: CreateProductDto): Promise<void> {

    }

    async updateProduct(productId: string, product: UpdateProductDto): Promise<void> {

    }

    async deleteProduct(productId: string): Promise<void> {

    }

}
