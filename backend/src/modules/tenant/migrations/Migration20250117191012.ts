import { Migration } from '@mikro-orm/migrations';

export class Migration20250117191012 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "tenant" ("id" text not null, "name" text not null, "handle" text not null, "status" text check ("status" in (\'active\', \'inactive\', \'pending\')) not null default \'pending\', "settings" jsonb not null default \'{}\', "metadata" jsonb not null default \'{}\', "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "tenant_pkey" primary key ("id"));');
    this.addSql('CREATE UNIQUE INDEX IF NOT EXISTS "IDX_tenant_handle_unique" ON "tenant" (handle) WHERE deleted_at IS NULL;');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_tenant_deleted_at" ON "tenant" (deleted_at) WHERE deleted_at IS NULL;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "tenant" cascade;');
  }

}
