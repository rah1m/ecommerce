import {User} from './user.types';

interface Review {
    name: string;
    rating: number;
    comment: string;
}
export interface Product {
    _id?: string;
    user?: User;
    name?: string;
    image?: string;
    brand?: string;
    category?: string;
    description?: string;
    reviews?: Review[];
    rating?: number;
    numReviews?: number;
    price?: number;
    countInStock?: number;
}
