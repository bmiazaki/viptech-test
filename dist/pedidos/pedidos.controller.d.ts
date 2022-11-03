import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
export declare class PedidosController {
    private readonly pedidosService;
    constructor(pedidosService: PedidosService);
    create(createPedidoDto: CreatePedidoDto): Promise<CreatePedidoDto & import("./entities/pedido.entity").Pedido>;
    findAll(): Promise<import("./entities/pedido.entity").Pedido[]>;
    findOne(id_cliente: number): Promise<import("./entities/pedido.entity").Pedido[]>;
    update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
