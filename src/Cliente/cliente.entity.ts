import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { Pedido } from "src/Pedido/pedido.entity";

@Entity("clientes")
export class Cliente {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ name: 'nome', type: 'varchar'})
    nome: string;
    
    @Column({ name: 'cpf', type: 'varchar'})
    cpf: string;
    
    @Column({ name: 'rg', type: 'int' })
    rg: number;
    
    @Column({ name: 'endereco', type: 'varchar' })
    endereco: string;

    @Column({ name: 'bairro', type: 'varchar'})
    bairro: string;

    @Column({ name: 'cidade', type: 'varchar'})
    cidade: string;

    @Column({ name: 'cep', type: 'int'})
    cep: number;
    
    @OneToMany(type => Pedido, pedido => pedido.cliente)
    pedidos: Pedido[];
}