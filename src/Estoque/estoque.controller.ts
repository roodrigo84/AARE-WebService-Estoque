import { Controller, Get, Param, Body, Put } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { Estoque } from './estoque.entity';

@Controller("estoque")
export class EstoqueController {
    
    constructor(private readonly service: EstoqueService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.service.findById(id);
    }

    @Put(":id")
    update(@Param() id : number, @Body() estoque : Estoque){
        estoque.id = Number(id);
        return this.service.update(estoque);
    }

}
