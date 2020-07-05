import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteController } from './cliente/cliente.controller';
import { ProdutoController } from './produto/produto.controller';
import { PedidoController } from './pedido/pedido.controller';
import { ClienteService } from './cliente/cliente.service';
import { PedidoService } from './pedido/pedido.service';
import { ProdutoService } from './produto/produto.service';
import { Cliente } from './Cliente/cliente.entity';
import { Pedido } from './Pedido/pedido.entity';
import { Produto } from './Produto/produto.entity';
import { EstoqueController } from './estoque/estoque.controller';
import { EstoqueService } from './estoque/estoque.service';
import { Estoque } from './Estoque/estoque.entity';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'RODRIGO',
      database: 'webservice',
      entities: [Cliente, Pedido, Produto, Estoque ],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([
      Cliente,
      Pedido,
      Produto,
      Estoque
    ])
  ],
  controllers: [AppController, ClienteController, ProdutoController, PedidoController, EstoqueController],
  providers: [AppService, ClienteService, PedidoService, ProdutoService, EstoqueService],
})
export class AppModule {}
