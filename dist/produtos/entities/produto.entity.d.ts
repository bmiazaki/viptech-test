import { Pedido } from 'src/pedidos/entities/pedido.entity';
export declare class Produto {
    id_produto: number;
    nome_produto: string;
    tamanho_produto: string;
    cor_produto: string;
    valor_produto: number;
    pedidos: Pedido[];
}
