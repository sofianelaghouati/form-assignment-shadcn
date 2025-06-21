import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { DialogForm } from "../dialog-form"
import { userSchema } from "../../types/user"
import { z } from "zod"
import { useEffect, useState } from "react"
import type { User } from "../../types/user"

type UserForm = z.infer<typeof userSchema>

export function EditUserDialog({
  user,
  onEdit,
  onCancel,
}: {
  user: User
  onEdit: (data: User) => void
  onCancel: () => void
}) {
  const form = useForm<UserForm>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      role: "",
      position: "",
    },
  })

  const [open, setOpen] = useState(true)

  // Pre-fill form with user data on mount
  useEffect(() => {
    form.reset({
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      role: user.role,
      position: user.position,
    })
  }, [user, form])

  const onSubmit = (data: UserForm) => {
    onEdit({ ...user, ...data }) // Keep original id
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      setOpen(isOpen)
      if (!isOpen) onCancel()
    }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modifier l'utilisateur</DialogTitle>
          <DialogDescription>
            Modifiez les informations de l’utilisateur sélectionné
          </DialogDescription>
        </DialogHeader>

        <DialogForm form={form} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  )
}
