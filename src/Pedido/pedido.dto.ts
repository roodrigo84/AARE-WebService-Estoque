import { IsString, MaxLength, MinLength } from "class-validator";



export class PedidoDto {


    id: number;
    
    @IsString({ message:  'Não é um codigo válido'})
    @MinLength(1, { message: 'O campo codigo deve ter nom mínimo 1 caracteres'})
    @MaxLength(15, { message: 'O campo codigo deve ter no máximo 15 caracteres'})
    codigo: number;

    @IsString({ message:  'Não é uma data válido'})
    @MinLength(10, { message: 'O campo data deve ter nom mínimo 10 caracteres'})
    @MaxLength(10, { message: 'O campo data deve ter no máximo 10 caracteres'})
    data: string;

    @IsString({ message: 'Não é uma data entrega prevista válido'})
    @MinLength(8, { message: 'O campo data entrega prevista deve ter no mínimo 8 caracteres'})
    @MaxLength(11, { message: 'O campo data entrega prevista deve ter no máximo 11 caracteres'})
    dataEntregaPrevista: string;

    @IsString({ message: 'Não é uma transpostadora válido'})
    @MinLength(3, { message: 'O campo transpostadora deve ter no mínimo 3 caracteres'})
    @MaxLength(20, { message: 'O campo transpostadora deve ter no máximo 20 caracteres'})
    transpostadora: string;

    @IsString({ message: 'Não é um valor total válido'})
    @MinLength(6, { message: 'O campo valor total deve ter no mínimo 6 caracteres'})
    @MaxLength(12, { message: 'O campo valor total deve ter no máximo 12 caracteres'})
    valorTotal: string;

    @IsString({ message: 'Não é um valor dos produtos válido'})
    @MinLength(6, { message: 'O campo valor dos produtos deve ter no mínimo 6 caracteres'})
    @MaxLength(12, { message: 'O campo valor dos produtos deve ter no máximo 12 caracteres'})
    valorProdutos: string;

    @IsString({ message: 'Não é um valor dos descontos válido'})
    @MinLength(3, { message: 'O campo valor dos descontos deve ter no mínimo 6 caracteres'})
    @MaxLength(12, { message: 'O campo valor dos descontos deve ter no máximo 12 caracteres'})
    valorDescontos: string;

    @IsString({ message: 'Não é um cliente válido'})
    @MinLength(3, { message: 'O campo cliente deve ter no mínimo 9 caracteres'})
    @MaxLength(50, { message: 'O campo cliente deve ter no máximo 12 caracteres'})
    clientePedido: string;

    @IsString({ message: 'Não é um endereço de Entrega válido'})
    @MinLength(30, { message: 'O campo endereço de Entrega deve ter no mínimo 30 caracteres'})
    @MaxLength(100, { message: 'O campo endereço de Entrega deve ter no máximo 100 caracteres'})
    endereçoEntrega: string;

}