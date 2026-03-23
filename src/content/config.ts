import { defineCollection, z } from "astro:content";

const productos = defineCollection({
	type: "content",
	schema: z.object({
		nombre: z.string(),
		descripcion: z.string(),
		precio: z.number(),
		categoria: z.enum(["lanyards", "cintas", "accesorios"]),
		imagen: z.string().optional(),
		destacado: z.boolean().default(false), // para el preview en landing
	}),
});

export const collections = { productos };
