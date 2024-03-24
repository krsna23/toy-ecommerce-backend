import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Toys {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;


  @Column()
  details: string;

  @Column()
  usedFor: string;

  @Column()
  location: string;

  @Column({ nullable: true }) // Making price optional
  price?: number;

  @Column() // Assuming photos will be stored as a string
  photo?: string;

  @Column()
  userId: number;
}