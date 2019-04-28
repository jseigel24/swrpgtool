import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { TalentLocation } from './talentlocation.entity';
import { Career } from './career.entity';

@Entity()
export class Specialization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @OneToMany(type => TalentLocation, talentlocation =>  talentlocation.specialization)
  talentlocations: TalentLocation[];

  @ManyToOne(type => Career)
  career: Career;

}