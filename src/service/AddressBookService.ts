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
    const { id, did, address } = addressBookRequest;
    addressBook.id = id;
    addressBook.did = did;
    addressBook.address = address;

    // save entity
    await this.addressBookModel.save(addressBook);
  }
}
