import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { AddressBook } from '../entity/AddressBookEntity';
import { Repository } from 'typeorm';
import { AddressBookRequest } from '../request/addressBookObj';

@Provide()
export class AddressBookService {
  @InjectEntityModel(AddressBook)
  addressBookReposity: Repository<AddressBook>;

  // save
  async saveAddress(addressBookRequest: AddressBookRequest) {
    // create a entity object
    const addressBook = new AddressBook();
    const { did, address } = addressBookRequest;
    addressBook.did = did;
    addressBook.address = address;

    // save entity
    const res = await this.addressBookReposity.save(addressBook);
    return res;
  }

  // find by address
  async findByAddress(addr: string) {
    // find one by given address
    const record = await this.addressBookReposity.find({
      where: { address: addr },
    });
    return record;
  }

  // remove/delete by address
  async deleteByAddress(addr: string) {
    const recordToRemove = await this.addressBookReposity.findBy({
      address: addr,
    });
    const removeRes = await this.addressBookReposity.remove(recordToRemove);
    return removeRes;
    // const deleteRes = await this.addressBookReposity.delete({ address: addr });
    // return deleteRes;
  }
}
