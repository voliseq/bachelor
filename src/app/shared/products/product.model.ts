import {Image} from "./image.model";
/**
 * Created by voliseq on 26.11.2016.
 */
export class Product{

    constructor(public name: string,
                public product_id: number,
                public description: string,
                public price: number,
                public quantity: number,
                public images?: Image[]){

    }

}