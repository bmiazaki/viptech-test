import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidosService 
{
  constructor( @InjectRepository(Pedido) private userRepository: Repository<Pedido>,) { }

  create(createPedidoDto: CreatePedidoDto) {
    return this.userRepository.save(createPedidoDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findByClient(id_cliente: number) {
    return this.userRepository.findBy({ id_cliente: id_cliente });
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return this.userRepository.update(id, updatePedidoDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
