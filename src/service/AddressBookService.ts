import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { AddressBook } from '../entity/AddressBookEntity';
import { Repository } from 'typeorm';
import { AddressBookRequest } from '../request/addressBookObj';

@Provide()
export class AddressBookService {
  @InjectEntityModel(AddressBook)
  addressBookModel: Repository<AddressBook>;

  // save
  async saveAddress(addressBookRequest: AddressBookRequest) {
    // create a entity object
    const addressBook = new AddressBook();
    const { did, address } = addressBookRequest;
    addressBook.did = did;
    addressBook.address = address;

    // save entity
    const res = await this.addressBookModel.save(addressBook);
    return res;
  }
}
