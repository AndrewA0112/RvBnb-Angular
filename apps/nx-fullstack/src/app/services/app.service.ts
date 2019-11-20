import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsI…wNzN9.BxTOQPgyp_CKn43-Q4V_AOXYRqYWf6RpJrEr5P7VWh0'
    })
}

@Injectable()
export class AppService {

    constructor(private http: HttpClient) {}

    getListings() {
        return this.http.get('https://rvbnb.herokuapp.com/api/listings', httpOptions)
    }
}