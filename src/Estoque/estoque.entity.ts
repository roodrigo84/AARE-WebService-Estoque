import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";



@Entity("estoque")
export class Estoque {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'quantidade', type: 'int'})
    quantidade: number;
}