import { z } from "zod"

export const postAdminCreateBrand = z.object({
    name : z.string().min(1, "Name is required"),
})