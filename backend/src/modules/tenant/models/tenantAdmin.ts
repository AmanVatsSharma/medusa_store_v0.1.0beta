import { model } from "@medusajs/utils";
import tenant from "./tenant";


const TenantAdmin = model.define("tenant_admin", {
  id: model.id().primaryKey(),
  first_name: model.text().nullable(),
  last_name: model.text().nullable(),
  email: model.text().unique(),
  password: model.text().nullable(),
  phone: model.text().nullable(),
  is_active: model.boolean().default(true),
  is_super_admin: model.boolean().default(false),
  is_verified: model.boolean().default(false),
  tenant: model.belongsTo(() => tenant, {
    mappedBy: "admins",
  }),
})

export default TenantAdmin
