import { IsString, MaxLength, MinLength } from "class-validator";



export class ClienteDto {

    id: number;

    @IsString({ message:  'Não é um nome válido'})
    @MinLength(3, { message: 'O campo nome deve ter nom mínimo 3 caracteres'})
    @MaxLength(30, { message: 'O campo nome deve ter no máximo 30 caracteres'})
    nome: string;

    @IsString({ message:  'Não é um CPF válido'})
    @MinLength(10, { message: 'O campo sobrenome deve ter nom mínimo 10 caracteres'})
    @MaxLength(15, { message: 'O campo sobrenome deve ter no máximo 15 caracteres'})
    cpf: string;

    @IsString({ message: 'Não é um RG válido'})
    @MinLength(8, { message: 'O campo RG deve ter no mínimo 8 caracteres'})
    @MaxLength(11, { message: 'O campo RG deve ter no máximo 11 caracteres'})
    rg: string;

    @IsString({ message: 'Não é uma idade válido'})
    @MinLength(1, { message: 'O campo idade deve ter no mínimo 1 caracteres'})
    idade: string;

    @IsString({ message: 'Não é um endereco válido'})
    @MinLength(30, { message: 'O campo endereco deve ter no mínimo 30 caracteres'})
    @MaxLength(100, { message: 'O campo endereco deve ter no máximo 100 caracteres'})
    endereco: string;

    @IsString({ message: 'Não é um bairro válido'})
    @MinLength(8, { message: 'O campo bairro deve ter no mínimo 8 caracteres'})
    @MaxLength(20, { message: 'O campo bairro deve ter no máximo 20 caracteres'})
    bairro: string;

    @IsString({ message: 'Não é uma cidade válido'})
    @MinLength(8, { message: 'O campo cidade deve ter no mínimo 8 caracteres'})
    @MaxLength(80, { message: 'O campo cidade deve ter no máximo 80 caracteres'})
    cidade: string;

    @IsString({ message: 'Não é um cep válido'})
    @MinLength(9, { message: 'O campo cep deve ter no mínimo 9 caracteres'})
    @MaxLength(12, { message: 'O campo cep deve ter no máximo 12 caracteres'})
    cep: string;


}