import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';
export declare class PedidosService {
    private userRepository;
    constructor(userRepository: Repository<Pedido>);
    create(createPedidoDto: CreatePedidoDto): Promise<CreatePedidoDto & Pedido>;
    findAll(): Promise<Pedido[]>;
    findByClient(id_cliente: number): Promise<Pedido[]>;
    update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
