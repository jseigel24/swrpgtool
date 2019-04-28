import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TalentLocation } from './talentlocation.entity';

@Entity()
export class Talent{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    name: string;
  
    @Column('text')
    description: string;
 
    @OneToMany(type => TalentLocation, talentlocation =>  talentlocation.specialization)
    talentlocations: TalentLocation[];
}
