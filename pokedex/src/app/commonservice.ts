import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, Subject, interval, timer } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor(private http: HttpClient) {

    }
    get(_url): Observable<any> {
        const self = this;
        return self.http
            .get(_url);
    }
    getPokedex(_url) {
        const self = this;
        return new Promise<any>((resolve, reject) => {
            self.get(_url).subscribe(_res => {
                console.log("sube", _res)
                if (_res) {
                    resolve(_res)
                } else {
                    reject()
                }
            })
        });
    }
    getPokemonDetails(_url) {
        const self = this;
        return new Promise<any>((resolve, reject) => {
            self.get(_url).subscribe(_res => {
                if (_res) {
                    resolve(_res)
                } else {
                    reject()
                }
            })
        });
    }
}