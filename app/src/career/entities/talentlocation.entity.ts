import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Talent } from './talent.entity';
import { Specialization } from './specialization.entity';

@Entity()
export class TalentLocation{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type:'text', nullable: false})
    position: string;

    @Column({type:'boolean', nullable: false})
    up: boolean;

    @Column({type:'boolean', nullable: false})
    right: boolean;

    @Column({type:'boolean', nullable: false})
    down: boolean;

    @Column({type:'boolean', nullable: false})
    left: boolean;

    @ManyToOne(type => Talent, talent => talent.talentlocations)
    talent: Talent;

    @ManyToOne(type => Specialization, specialization => specialization.talentlocations)
    specialization: Specialization;
}
