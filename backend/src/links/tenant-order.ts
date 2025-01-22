import { defineLink } from "@medusajs/framework/utils"
import OrderModule from "@medusajs/medusa/order"
import tenant from "src/modules/tenant"

export default defineLink(
  tenant.linkable.tenant,
  {
    linkable: OrderModule.linkable.order,
    isList: true,
  }
)