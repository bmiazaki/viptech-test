import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Produto } from 'src/produtos/entities/produto.entity';

@Entity()
export class Pedido 
{
    @PrimaryGeneratedColumn('increment')
    id_pedido: number;

    @Column()
    id_cliente: number;

    @Column('date')
    data_pedido: Date;

    @Column()
    forma_pagamento: string;

    @Column('date')
    data_entrega: Date;

    @ManyToMany(() => Produto)
    @JoinTable()
    produtos: Produto[];
}
