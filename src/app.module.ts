import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { PedidosModule } from './pedidos/pedidos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Aiszwe42@',
      database: 'test_project',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }), 
    ProdutosModule, PedidosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
