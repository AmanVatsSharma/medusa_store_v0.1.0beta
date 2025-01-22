import { defineLink } from "@medusajs/framework/utils"
import ProductModule from "@medusajs/medusa/product"
import tenant from "src/modules/tenant"

export default defineLink(
  tenant.linkable.tenant,
  {
    linkable: ProductModule.linkable.product,
    isList: true,
  }
);
