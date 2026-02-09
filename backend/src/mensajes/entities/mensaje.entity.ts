import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mensaje {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nickname: string;

    @Column()
    mensaje: string;
}

