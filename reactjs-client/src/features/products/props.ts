import { IProductStoreState, IProductCreate, IProductUpdate } from "./models"
export interface IProductListProps extends IProductStoreState {
    getProductList(): Promise<void>;
    createProduct(productModel: IProductCreate): Promise<void>;
    updateProduct(productId: string, productModel: IProductUpdate): Promise<void>;
    deleteProduct(productId: string): Promise<void>;
}