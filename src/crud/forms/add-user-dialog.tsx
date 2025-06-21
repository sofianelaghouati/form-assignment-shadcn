import { DialogForm } from "./dialog-form"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { userSchema } from "../types/user" // adjust path if needed
import { z } from "zod"

// ✅ Use the schema type without `id`
type NewUser = z.infer<typeof userSchema>

export function AddUserDialog({
  onAdd,
}: {
  onAdd: (data: NewUser) => void
}) {
  const form = useForm<NewUser>({
    resolver: zodResolver(userSchema)
  })

  const [open, setOpen] = useState(false)

  const onSubmit = (data: NewUser) => {
    onAdd(data)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Ajouter utilisateur</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajouter un utilisateur</DialogTitle>
          <DialogDescription>
            Remplissez les informations ci-dessous
          </DialogDescription>
        </DialogHeader>
        <DialogForm form={form} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  )
}
