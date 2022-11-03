import { Produto } from 'src/produtos/entities/produto.entity';
export declare class Pedido {
    id_pedido: number;
    id_cliente: number;
    data_pedido: Date;
    forma_pagamento: string;
    data_entrega: Date;
    produtos: Produto[];
}
