import { PrimaryGeneratedColumn, Column, OneToMany, Entity, ManyToOne, JoinTable } from "typeorm";
import { Cliente } from "src/Cliente/cliente.entity";
import { type } from "os";
import { Produto } from "src/produto/produto.entity";

@Entity ("pedidos")
export class Pedido{

    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'codigo', type: 'int',})
    codigo:  number;
    
    @Column({name: 'data', type: 'varchar'})
    data: string;
    
    @Column({name: 'data de entrega prevista', type: 'varchar'})
    dataEntregaPrevista: Date;

    @Column({name: 'transpostadora', type: 'varchar'})
    transpostadora: string;

    @Column({name: 'valor total', type: 'varchar'})
    valorTotal: string;

    @Column({name: 'valor dos produtos', type: 'varchar'})
    valorProdutos: string;

    @Column({name: 'valor de descontos', type: 'varchar'})
    valorDesconto: string;

    @Column({name: 'cliente', type: 'varchar'})
    clientePedido: string;

    @Column({name: 'endereo de entrega', type: 'varchar'})
    enderecoEntrega: string;
    
    @ManyToOne(type => Cliente, cliente => cliente.pedidos)
    cliente: Cliente;
    
   
}