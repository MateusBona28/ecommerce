import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("users")
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    username: string

    @Column({ length: 120 })
    password: string

    @CreateDateColumn({ type: "date" })
    createdAt: Date

    @UpdateDateColumn({ type: "date" })
    updatedAt: Date

    @Column({ default: false })
    isAdm: boolean;

}