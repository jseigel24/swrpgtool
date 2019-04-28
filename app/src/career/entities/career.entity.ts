import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Specialization } from './specialization.entity';

@Entity()
export class Career{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 500 })
    name: string;
  
    @Column('text')
    description: string;
    
    @ManyToOne(type => Specialization, specialization => specialization.career)
    specializations: Specialization[];
}
