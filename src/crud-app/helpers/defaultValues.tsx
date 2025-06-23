import { type User } from "../types/user"
import {roles} from "../helpers/roles"

function getRandomRoles(min = 2, max = 4): string[] {
  const shuffled = [...roles].sort(() => 0.5 - Math.random());
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  return shuffled.slice(0, count);
}


export const initialUsers: User[] = [
  { id: crypto.randomUUID(), nom: "Alice", prenom: "Cruz", email: "alice@example.com", role: getRandomRoles(), position: "Cheffe de projet" },
  { id: crypto.randomUUID(), nom: "Bob", prenom: "Martin", email: "bob@example.com", role: getRandomRoles(), position: "Directeur Technique" },
  { id: crypto.randomUUID(), nom: "Claire", prenom: "Dupont", email: "claire.dupont@example.com", role: getRandomRoles(), position: "Designer UX/UI" },
  { id: crypto.randomUUID(), nom: "Thomas", prenom: "Lemoine", email: "thomas.lemoine@example.com", role: getRandomRoles(), position: "Responsable IT" },
  { id: crypto.randomUUID(), nom: "Lina", prenom: "Nguyen", email: "lina.nguyen@example.com", role: getRandomRoles(), position: "Développeuse Frontend" },
  { id: crypto.randomUUID(), nom: "Julien", prenom: "Bernard", email: "julien.bernard@example.com", role: getRandomRoles(), position: "Développeur Backend" },
  { id: crypto.randomUUID(), nom: "Émilie", prenom: "Fournier", email: "emilie.fournier@example.com", role: getRandomRoles(), position: "Responsable RH" },
  { id: crypto.randomUUID(), nom: "Antoine", prenom: "Girard", email: "antoine.girard@example.com", role: getRandomRoles(), position: "Analyste Sécurité" },
  { id: crypto.randomUUID(), nom: "Sophie", prenom: "Meunier", email: "sophie.meunier@example.com", role: getRandomRoles(), position: "Cheffe produit" },
  { id: crypto.randomUUID(), nom: "Hugo", prenom: "Marchand", email: "hugo.marchand@example.com", role: getRandomRoles(), position: "CTO" },
  { id: crypto.randomUUID(), nom: "Nora", prenom: "Carpentier", email: "nora.carpentier@example.com", role: getRandomRoles(), position: "Marketing Digital" },
  { id: crypto.randomUUID(), nom: "Karim", prenom: "Ziani", email: "karim.ziani@example.com", role: getRandomRoles(), position: "QA Engineer" },
  { id: crypto.randomUUID(), nom: "Leïla", prenom: "Bensalem", email: "leila.bensalem@example.com", role: getRandomRoles(), position: "Responsable juridique" },
  { id: crypto.randomUUID(), nom: "Yasmine", prenom: "Belkacem", email: "yasmine.belkacem@example.com", role: getRandomRoles(), position: "Support technique" },
  { id: crypto.randomUUID(), nom: "Walid", prenom: "Haddad", email: "walid.haddad@example.com", role: getRandomRoles(), position: "Directeur financier" },
  { id: crypto.randomUUID(), nom: "Mounir", prenom: "Kaci", email: "mounir.kaci@example.com", role: getRandomRoles(), position: "Ingénieur DevOps" },
  { id: crypto.randomUUID(), nom: "Amina", prenom: "Cherif", email: "amina.cherif@example.com", role: getRandomRoles(), position: "Rédactrice web" },
  { id: crypto.randomUUID(), nom: "Salah", prenom: "Boukhalfa", email: "salah.boukhalfa@example.com", role: getRandomRoles(), position: "DSI" },
  { id: crypto.randomUUID(), nom: "Imane", prenom: "Khelifi", email: "imane.khelifi@example.com", role: getRandomRoles(), position: "Community Manager" },
  { id: crypto.randomUUID(), nom: "Reda", prenom: "Mokhtar", email: "reda.mokhtar@example.com", role: getRandomRoles(), position: "Data Analyst" }
];
