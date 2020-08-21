import {MigrationInterface, QueryRunner} from "typeorm";

export class columnUpdate1598033654094 implements MigrationInterface {
    name = 'columnUpdate1598033654094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "lastUpdate"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "lastUpdate" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "lastUpdate"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "lastUpdate" integer NOT NULL`);
    }

}
