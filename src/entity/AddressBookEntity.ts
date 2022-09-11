import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityModel()
export class AddressBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 60,
  })
  did: string;

  @Column({
    type: 'varchar',
    length: 60,
  })
  address: string;
}
