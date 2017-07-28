import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Transaction } from './Transaction';

@Injectable()
export class TransactionService {
    private serviceUrl = 'https://local.docker:4243/transaction';

    constructor(private http: Http) {
    }

    public recordTransaction(transaction: Transaction): Observable<Transaction> {
        let headers = new Headers({'Accept': 'application/json'});
        return this.http
            .post(this.serviceUrl, transaction, { headers })
            .map((res: Response) => res.json())
            .catch((error) => {
                return Observable.throw(error);
        });
    }
}
