import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { type } from "os";
import { Pedido } from "src/Pedido/pedido.entity";



@Entity ("produtos")
export class Produto{

    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({name: 'nome', type: 'varchar'})
    nome: string;
   
    @Column({name: 'descriçao', type: 'varchar'})
    descricao: string;

    @Column({name: 'preço', type: 'varchar'})
    preco: string;
    
    @Column({name: 'estoque', type: 'int'})
    estoque: number;

    @Column({name: 'data de validade', type: 'varchar'})
    dataValidade: string;

    @Column({name: 'unidade de medida', type: 'varchar'})
    unidadeMedida: string;

    
    
}