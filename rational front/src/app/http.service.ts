import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { map, delay, catchError } from 'rxjs/operators';
import { RationalNumber } from './rational-number';

@Injectable()
export class HttpService{

    private url = "https://localhost:44368/api/rational";

    constructor(private http: HttpClient) {  }

    getResult(expression : string) : Observable<RationalNumber>{

        const body = {
            value : expression,
        };
        return this.http.post<RationalNumber>(this.url, body);
    }
}