import { type User } from "../types/user"

export const initialUsers: User[] = [
  { id: crypto.randomUUID(), nom: "Alice", prenom: "Cruz", email: "alice@example.com", role: ["Admin", "Manager"], position: "Cheffe de projet" },
  { id: crypto.randomUUID(), nom: "Bob", prenom: "Martin", email: "bob@example.com", role: ["User", "Developer"], position: "Directeur Technique" },
  { id: crypto.randomUUID(), nom: "Claire", prenom: "Dupont", email: "claire.dupont@example.com", role: ["User", "Designer"], position: "Designer UX/UI" },
  { id: crypto.randomUUID(), nom: "Thomas", prenom: "Lemoine", email: "thomas.lemoine@example.com", role: ["Admin", "IT"], position: "Responsable IT" },
  { id: crypto.randomUUID(), nom: "Lina", prenom: "Nguyen", email: "lina.nguyen@example.com", role: ["User", "Frontend"], position: "Développeuse Frontend" },
  { id: crypto.randomUUID(), nom: "Julien", prenom: "Bernard", email: "julien.bernard@example.com", role: ["User", "Backend"], position: "Développeur Backend" },
  { id: crypto.randomUUID(), nom: "Émilie", prenom: "Fournier", email: "emilie.fournier@example.com", role: ["Admin", "HR"], position: "Responsable RH" },
  { id: crypto.randomUUID(), nom: "Antoine", prenom: "Girard", email: "antoine.girard@example.com", role: ["User", "Security"], position: "Analyste Sécurité" },
  { id: crypto.randomUUID(), nom: "Sophie", prenom: "Meunier", email: "sophie.meunier@example.com", role: ["User", "Product"], position: "Cheffe produit" },
  { id: crypto.randomUUID(), nom: "Hugo", prenom: "Marchand", email: "hugo.marchand@example.com", role: ["Admin", "CTO"], position: "CTO" },
  { id: crypto.randomUUID(), nom: "Nora", prenom: "Carpentier", email: "nora.carpentier@example.com", role: ["User", "Marketing"], position: "Marketing Digital" },
  { id: crypto.randomUUID(), nom: "Karim", prenom: "Ziani", email: "karim.ziani@example.com", role: ["User", "Tester"], position: "QA Engineer" },
  { id: crypto.randomUUID(), nom: "Leïla", prenom: "Bensalem", email: "leila.bensalem@example.com", role: ["Admin", "Legal"], position: "Responsable juridique" },
  { id: crypto.randomUUID(), nom: "Yasmine", prenom: "Belkacem", email: "yasmine.belkacem@example.com", role: ["User", "Support"], position: "Support technique" },
  { id: crypto.randomUUID(), nom: "Walid", prenom: "Haddad", email: "walid.haddad@example.com", role: ["Admin", "Finance"], position: "Directeur financier" },
  { id: crypto.randomUUID(), nom: "Mounir", prenom: "Kaci", email: "mounir.kaci@example.com", role: ["User", "Ops"], position: "Ingénieur DevOps" },
  { id: crypto.randomUUID(), nom: "Amina", prenom: "Cherif", email: "amina.cherif@example.com", role: ["User", "Content"], position: "Rédactrice web" },
  { id: crypto.randomUUID(), nom: "Salah", prenom: "Boukhalfa", email: "salah.boukhalfa@example.com", role: ["Admin", "Security"], position: "DSI" },
  { id: crypto.randomUUID(), nom: "Imane", prenom: "Khelifi", email: "imane.khelifi@example.com", role: ["User", "Social"], position: "Community Manager" },
  { id: crypto.randomUUID(), nom: "Reda", prenom: "Mokhtar", email: "reda.mokhtar@example.com", role: ["User", "Analytics"], position: "Data Analyst" }
]
