import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estoque } from './estoque.entity';

@Injectable()
export class EstoqueService {


    constructor(
        @InjectRepository(Estoque)
        private readonly repository: Repository<Estoque>) { }
    
    save(estoque: Estoque) {
        return this.repository.save(estoque);
    }
    update(estoque : Estoque){
        return this.repository.update(estoque.id, estoque);
    }

    findAll() {
        return this.repository.find();
    }

    findById(id: number) {
        return this.repository.findOne(id);
    }

}
