import {
  ALL,
  Body,
  Controller,
  Del,
  Get,
  Inject,
  Param,
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

  @Get('/find-by-address/:address')
  async findByAddress(@Param() address: string) {
    const findRequest = this.addrssBookService.findByAddress(address);
    return findRequest;
  }

  @Post('/add')
  async addItem(@Body(ALL) addressBookRequest: AddressBookRequest) {
    const saveRequest = this.addrssBookService.saveAddress(addressBookRequest);
    return saveRequest;
  }

  @Del('/remove-by-address/:address')
  async removeByAddress(@Param() address: string) {
    const removeRequest = this.addrssBookService.deleteByAddress(address);
    return removeRequest;
  }
}
