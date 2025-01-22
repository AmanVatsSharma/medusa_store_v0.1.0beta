import { Migration } from '@mikro-orm/migrations';

export class Migration20250121065549 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table if exists "brand" alter column "handle" type text using ("handle"::text);');
    this.addSql('alter table if exists "brand" alter column "handle" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table if exists "brand" alter column "handle" type text using ("handle"::text);');
    this.addSql('alter table if exists "brand" alter column "handle" set not null;');
  }

}
