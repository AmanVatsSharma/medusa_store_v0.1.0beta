import { model } from "@medusajs/framework/utils"

export const Brand = model.define("brand", {
  id: model.id().primaryKey(),
  name: model.text(),
  handle: model.text().unique().nullable(),
  status: model.enum(["active", "inactive", "pending"]).default("pending"),
  settings: model.json().default({}),
  metadata: model.json().default({}),
})