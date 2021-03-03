import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
//biblioteca uuid
import { v4 as uuid } from 'uuid';

// entity (nome da tabela do migrations)
@Entity('users')
class User {

    //readonly: nao pode mudar o valor
    @PrimaryColumn()
    readonly id: string;

    //se o name = atributo nao precisa passar o nome entre parenteses
    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        //se esse id não existir, o valor vai ser da função uuid()
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };