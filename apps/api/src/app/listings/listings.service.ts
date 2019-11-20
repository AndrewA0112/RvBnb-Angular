import { Injectable } from '@nestjs/common';

const listings = [1, 2, 3]

@Injectable()
export class ListingsService {

    addListing() {
        const listingsLength = listings.length + 1
        listings.push(listingsLength)
        return listings
    }

    getListings() {
        return listings
    }
}