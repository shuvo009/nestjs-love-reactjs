export interface IProductCreate {
    name: string;
    price: number;
}

export interface IProductUpdate extends IProductCreate {
    id: string;
    quantity: number;
}

export interface IProduct {
    name: string;
    price: number;
    id: string;
    quantity: number;
    lastUpdate: Date;
}