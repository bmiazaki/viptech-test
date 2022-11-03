import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Produto 
{
    @PrimaryGeneratedColumn('increment')
    id_produto: number;

    @Column()
    nome_produto: string;

    @Column()
    tamanho_produto: string;

    @Column()
    cor_produto: string;

    @Column()
    valor_produto: number;

    @ManyToMany(() => Pedido)
    pedidos: Pedido[];
}
