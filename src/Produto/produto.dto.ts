import { IsString, MaxLength, MinLength } from "class-validator";



export class ProdutoDto {


    id: number;
    
    @IsString({ message:  'Não é um nome válido'})
    @MinLength(3, { message: 'O campo nome deve ter nom mínimo 3 caracteres'})
    @MaxLength(50, { message: 'O campo nome deve ter no máximo 50 caracteres'})
    nome: string;

    @IsString({ message:  'Não é uma descrição válido'})
    @MinLength(3, { message: 'O campo descrição deve ter nom mínimo 11 caracteres'})
    @MaxLength(50, { message: 'O campo descrição deve ter no máximo 15 caracteres'})
    descricao: string;

    @IsString({ message: 'Não é um preço válido'})
    @MinLength(8, { message: 'O campo preço deve ter no mínimo 8 caracteres'})
    @MaxLength(11, { message: 'O campo preço deve ter no máximo 11 caracteres'})
    preco: string;

    @IsString({ message: 'Não é um estoque válido'})
    @MinLength(1, { message: 'O campo estoque deve ter no mínimo 1 caracteres'})
    @MaxLength(6, { message: 'O campo estoque deve ter no máximo 6 caracteres'})
    estoque: number;

    @IsString({ message: 'Não é uma data de validade válido'})
    @MinLength(30, { message: 'O campo data de validade deve ter no mínimo 30 caracteres'})
    @MaxLength(100, { message: 'O campo data de validade deve ter no máximo 100 caracteres'})
    dataValidade: string;

    @IsString({ message: 'Não é uma unidade de medida válido'})
    @MinLength(2, { message: 'O campo unidade de Medida deve ter no mínimo 2 caracteres'})
    @MaxLength(10, { message: 'O campo unidade de Medida deve ter no máximo 20 caracteres'})
    unidadeMedida: string;

}