import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity("products")
class Products {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  produto: string

  @Column()
  valor: number

  @Column()
  descricao: string

  @CreateDateColumn({type: "time"})
  created: Date

  @UpdateDateColumn({type: "time"})
  updated: Date
}

export default Products;
