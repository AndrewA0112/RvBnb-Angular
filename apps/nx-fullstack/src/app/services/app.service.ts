import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
}

@Injectable()
export class AppService {

    constructor(private http: HttpClient) {}

    getListings() {
        return this.http.get('https://rvbnb.herokuapp.com/api/listings', httpOptions)
    }
}