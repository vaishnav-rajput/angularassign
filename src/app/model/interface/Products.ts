export interface Product {
    id:          number;
    title:       string;
    image:       string;
    price:       number;
    description: string;
    brand:       string;
    model:       string;
    color:       string;
    category:    string;
    popular:     boolean;
    discount:    number;
}


export interface ProductsAPIResponseModel {
    status: string;
    message: string;
    products: any[];

}