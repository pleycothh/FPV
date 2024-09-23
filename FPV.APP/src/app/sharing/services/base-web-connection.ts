import {environment} from './envrionments/envrionment';

export abstract class BaseWebConnection {
    protected baseUrl: string;

    constructor() {
        if (environment.production) {
            this.baseUrl = 'https://mmbkapi.azurewebsites.net';
        }else{
            this.baseUrl = 'https://localhost:44326'; // https://localhost:7141/api/Book
        }
    }
}
