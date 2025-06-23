import { z } from "zod"
export type User = {
  id: string
} & z.infer<typeof userSchema>

// ✅ Zod validation schema
export const userSchema = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  prenom: z.string().min(1, "Le prénom est requis"),
  email: z.string().email("Email invalide"),
  role: z
    .array(z.string().min(1, "Le rôle ne peut pas être vide"))
    .min(1, "Au moins un rôle est requis"),
  position: z.string().min(1, "La position est requise"),
})

// ✅ TypeScript type
