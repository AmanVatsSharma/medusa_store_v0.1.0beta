import { MedusaService } from "@medusajs/framework/utils"
import Tenant from "../models/tenant"
import TenantAdmin from "../models/tenantAdmin"


class TenantService extends MedusaService({
    Tenant,
    TenantAdmin
}){

}


export default TenantService
