import { z } from "zod"
export type User = {
  id: string
} & z.infer<typeof userSchema>

// ✅ Zod validation schema
export const userSchema = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  prenom: z.string().min(1, "Le prénom est requis"),
  email: z.string().email("Email invalide"),
  role: z.string().min(1, "Le rôle est requis"),
  position: z.string().min(1, "La position est requise"),
})

// ✅ TypeScript type
