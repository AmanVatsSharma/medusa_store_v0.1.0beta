import { Migration } from '@mikro-orm/migrations';

export class Migration20250122050227 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "tenant_admin" ("id" text not null, "first_name" text null, "last_name" text null, "email" text not null, "password" text null, "phone" text null, "is_active" boolean not null default true, "is_super_admin" boolean not null default false, "is_verified" boolean not null default false, "tenant_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "tenant_admin_pkey" primary key ("id"));');
    this.addSql('CREATE UNIQUE INDEX IF NOT EXISTS "IDX_tenant_admin_email_unique" ON "tenant_admin" (email) WHERE deleted_at IS NULL;');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_tenant_admin_tenant_id" ON "tenant_admin" (tenant_id) WHERE deleted_at IS NULL;');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_tenant_admin_deleted_at" ON "tenant_admin" (deleted_at) WHERE deleted_at IS NULL;');

    this.addSql('alter table if exists "tenant_admin" add constraint "tenant_admin_tenant_id_foreign" foreign key ("tenant_id") references "tenant" ("id") on update cascade;');

    this.addSql('alter table if exists "tenant" add column if not exists "domain" text null, add column if not exists "store_name" text null, add column if not exists "store_description" text null, add column if not exists "store_logo" text null, add column if not exists "store_favicon" text null, add column if not exists "store_theme" text null, add column if not exists "plan_type" text check ("plan_type" in (\'free\', \'pro\', \'enterprise\')) not null default \'free\', add column if not exists "plan_id" text null, add column if not exists "company_details" jsonb not null default \'{}\', add column if not exists "billing_details" jsonb not null default \'{}\';');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "tenant_admin" cascade;');

    this.addSql('alter table if exists "tenant" drop column if exists "domain";');
    this.addSql('alter table if exists "tenant" drop column if exists "store_name";');
    this.addSql('alter table if exists "tenant" drop column if exists "store_description";');
    this.addSql('alter table if exists "tenant" drop column if exists "store_logo";');
    this.addSql('alter table if exists "tenant" drop column if exists "store_favicon";');
    this.addSql('alter table if exists "tenant" drop column if exists "store_theme";');
    this.addSql('alter table if exists "tenant" drop column if exists "plan_type";');
    this.addSql('alter table if exists "tenant" drop column if exists "plan_id";');
    this.addSql('alter table if exists "tenant" drop column if exists "company_details";');
    this.addSql('alter table if exists "tenant" drop column if exists "billing_details";');
  }

}
