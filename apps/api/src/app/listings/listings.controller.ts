import { ListingsService } from './listings.service';
import { Controller, Get, Post } from '@nestjs/common';


@Controller()
export class ListingsController {
  constructor(private readonly appService: ListingsService) {}

  @Get('listings')
  getListings() {
    return this.appService.getListings();
  }

  @Post('listings')
  addListing() {
    return this.appService.addListing();
  }
}
