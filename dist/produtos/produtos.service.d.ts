import { Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
export declare class ProdutosService {
    private userRepository;
    constructor(userRepository: Repository<Produto>);
    create(createProdutoDto: CreateProdutoDto): Promise<CreateProdutoDto & Produto>;
    findAll(): Promise<Produto[]>;
    findByName(nome_produto: string): Promise<Produto[]>;
    update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
