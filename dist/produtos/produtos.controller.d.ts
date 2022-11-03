import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    create(createProdutoDto: CreateProdutoDto): Promise<CreateProdutoDto & import("./entities/produto.entity").Produto>;
    findAll(): Promise<import("./entities/produto.entity").Produto[]>;
    findOne(nome_produto: string): Promise<import("./entities/produto.entity").Produto[]>;
    update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
