import { defineLink } from "@medusajs/framework/utils"
import CustomerModule from "@medusajs/medusa/customer"
import tenant from "src/modules/tenant"

export default defineLink(
  tenant.linkable.tenant,
  {
    linkable: CustomerModule.linkable.customer,
    isList: true,
  }
)