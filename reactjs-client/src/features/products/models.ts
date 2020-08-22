export interface IProductCreate {
    name: string;
    price: number;
}

export interface IProductUpdate extends IProductCreate {
    quantity: number;
}

export interface IProduct {
    name: string;
    price: number;
    id: string;
    quantity: number;
    lastUpdate: Date;
}

export interface IProductStoreState {
    products: IProduct[];
    isBusy: boolean;
    errorMessage: string;
}