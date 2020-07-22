import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tokens')
class Tokens {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  acess_token: string;
}

export default Tokens;
