import { defineMiddlewares, validateAndTransformBody } from "@medusajs/framework/http";
import { postAdminCreateBrand } from "./admin/brands/validators";
import { z } from "zod";
export default defineMiddlewares({
    routes: [
        {
            matcher: "/admin/brands",
            method: "POST",
            middlewares: [
                validateAndTransformBody(postAdminCreateBrand)
            ],
        },
        {
            matcher: "/admin/products",
            method: ["POST"],
            additionalDataValidator: {
                brand_id: z.string().optional(),
            },
        },
    ]
})