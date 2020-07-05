import { Controller, Body, Post, Get, Delete, Param, Put } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';
import { plainToClass } from 'class-transformer';
import { PedidoDto } from './pedido.dto';

@Controller("pedidos")
export class PedidoController {

    constructor(private readonly pedido: PedidoService) { }

    @Post()
    save(@Body() pedidoDto: PedidoDto){
        const pedido = plainToClass(Pedido, pedidoDto);
        return this.pedido.save(pedido);
    }

    @Get()
    findAll() {
        return this.pedido.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.pedido.findById(id);
    }
    
    @Put(":id")
    update(@Param('id') id : number, @Body() pedidoDto : PedidoDto){
        pedidoDto.id = Number(id);
        const pedido = plainToClass(Pedido, pedidoDto);
        return this.pedido.update(pedido);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.pedido.delete(id);
    }
}
