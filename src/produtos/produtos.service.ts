import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService 
{
  constructor( @InjectRepository(Produto) private userRepository: Repository<Produto>,) { }

  create(createProdutoDto: CreateProdutoDto) {
    return this.userRepository.save(createProdutoDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findByName(nome_produto: string) {
    return this.userRepository.findBy({ nome_produto: nome_produto });
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.userRepository.update(id, updateProdutoDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
