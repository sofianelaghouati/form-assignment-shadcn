import { type User } from "../types/user"
export const initialUsers: User[] = [
  { id: crypto.randomUUID(), nom: "Alice", prenom: "Cruz", email: "alice@example.com", role: "Admin", position: "Cheffe de projet" },
  { id: crypto.randomUUID(), nom: "Bob", prenom: "Martin", email: "bob@example.com", role: "User", position: "Directeur Technique" },
  { id: crypto.randomUUID(), nom: "Dupont", prenom: "Claire", email: "claire.dupont@example.com", role: "User", position: "Designer UX/UI" },
  { id: crypto.randomUUID(), nom: "Lemoine", prenom: "Thomas", email: "thomas.lemoine@example.com", role: "Admin", position: "Responsable IT" },
  { id: crypto.randomUUID(), nom: "Nguyen", prenom: "Lina", email: "lina.nguyen@example.com", role: "User", position: "Développeuse Frontend" },
  { id: crypto.randomUUID(), nom: "Bernard", prenom: "Julien", email: "julien.bernard@example.com", role: "User", position: "Développeur Backend" },
  { id: crypto.randomUUID(), nom: "Fournier", prenom: "Émilie", email: "emilie.fournier@example.com", role: "Admin", position: "Responsable RH" },
  { id: crypto.randomUUID(), nom: "Girard", prenom: "Antoine", email: "antoine.girard@example.com", role: "User", position: "Analyste Sécurité" },
  { id: crypto.randomUUID(), nom: "Meunier", prenom: "Sophie", email: "sophie.meunier@example.com", role: "User", position: "Cheffe produit" },
  { id: crypto.randomUUID(), nom: "Marchand", prenom: "Hugo", email: "hugo.marchand@example.com", role: "Admin", position: "CTO" },
  { id: crypto.randomUUID(), nom: "Carpentier", prenom: "Nora", email: "nora.carpentier@example.com", role: "User", position: "Marketing Digital" }
]
