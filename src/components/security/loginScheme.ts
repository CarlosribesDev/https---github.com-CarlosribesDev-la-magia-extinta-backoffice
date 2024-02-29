import { z } from "zod";

export const loginSchema = z.object({
    username: z.string().min(3, "El tamaño minimo debe ser 3"),
    password: z.string()
}).required();