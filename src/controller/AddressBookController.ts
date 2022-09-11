import {
  ALL,
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Provide,
} from '@midwayjs/decorator';
import { AddressBookRequest } from '../request/addressBookObj';
import { AddressBookService } from '../service/AddressBookService';

@Provide()
@Controller('/')
export class AddressBookController {
  @Inject()
  addrssBookService: AddressBookService;

  @Get('/get')
  async getInfo() {}

  @Post('/add')
  async addItem(@Body(ALL) addressBookRequest: AddressBookRequest) {
    const saveRequest = this.addrssBookService.saveAddress(addressBookRequest);
    return saveRequest;
  }
}
