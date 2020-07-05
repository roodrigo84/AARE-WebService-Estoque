import { Controller, Post, Get, Delete, Param, Body, Put } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';
import { plainToClass } from "class-transformer";
import { ProdutoDto } from './produto.dto';

@Controller("produto")
export class ProdutoController {
    

    constructor(private readonly produto: ProdutoService) { }

    @Post()
    save(@Body() produtoDto: Produto) {
        const produto = plainToClass(Produto, produtoDto);
        return this.produto.save(produto);
    }

    @Get()
    findAll() {
        return this.produto.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.produto.findById(id);
    }

    @Put(":id")
    update(@Param(`id`) id : number, @Body() produtoDto : ProdutoDto){
        produtoDto.id = Number(id);
        const produto = plainToClass(Produto, produtoDto);
        return this.produto.update(produto);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.produto.delete(id);
    }
}
