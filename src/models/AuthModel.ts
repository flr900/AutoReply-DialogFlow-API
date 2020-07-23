import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tokens')
export default class Tokens {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  acess_token: string;
}
