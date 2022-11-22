import { MigrationInterface, QueryRunner } from "typeorm";

export class criandoProdutos1669133036981 implements MigrationInterface {
    name = 'criandoProdutos1669133036981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "produto" character varying NOT NULL, "valor" integer NOT NULL, "descricao" character varying NOT NULL, "created" TIME NOT NULL DEFAULT now(), "updated" TIME NOT NULL DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
