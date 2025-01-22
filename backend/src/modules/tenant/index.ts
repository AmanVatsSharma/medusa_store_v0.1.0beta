import { Module } from "@medusajs/framework/utils"
import TenantService from "./services/tenant"

export const TENANT_MODULE = "tenant"

export default Module(TENANT_MODULE, {
    service: TenantService,
}) 