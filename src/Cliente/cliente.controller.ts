import { Controller, Body, Post, Get, Delete, Param, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';
import { plainToClass } from 'class-transformer';
import { ClienteDto } from './cliente.dto';

@Controller("cliente")
export class ClienteController {

    constructor(private readonly service: ClienteService) { }

    @Post()
    save(@Body() clienteDto: ClienteDto){
        const cliente = plainToClass(Cliente, clienteDto);
        return this.service.save(cliente);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.service.findById(id);
    }

    @Put(":id")
    update(@Param(`id`) id : number, @Body() clienteDto : ClienteDto){
        clienteDto.id = Number(id);
        const cliente = plainToClass(Cliente, clienteDto);
        return this.service.update(cliente);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.service.delete(id);
    }
}
