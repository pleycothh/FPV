import {environment} from './envrionments/envrionment';

export abstract class BaseWebConnection {
    protected baseUrl: string;

    constructor() {
        if (environment.production) {
            this.baseUrl = '';
        }else{
            this.baseUrl = 'https://localhost:7141'; // https://localhost:7141/api/Book
        }
    }
}