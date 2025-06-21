import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useState } from "react"
import { initialUsers } from "../helpers/defaultValues"
import { type User } from "../types/user"
import { AddUserDialog } from "../forms/dialogs/add-user-dialog"
import { userSchema } from "../types/user"
import { z } from "zod"
import { EditUserDialog } from "../forms/dialogs/edit-user-dialog"

export default function Page() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  type NewUser = z.infer<typeof userSchema>

  const handleAddUser = (data: NewUser) => {
    setUsers(prev => [
      ...prev,
      { id: crypto.randomUUID(), ...data }
    ])
  }

  const handleEditUser = (updated: User) => {
    setUsers(prev =>
      prev.map(user => (user.id === updated.id ? updated : user))
    )
  }

  return (
    <div className="min-w-4/5">
      <h1 className="mb-14 text-3xl">Dashboard CRUD</h1>

      <DataTable
        columns={columns}
        data={users}
        onRowDoubleClick={(user) => setSelectedUser(user)}
      />

      <div className="mt-4">
        <AddUserDialog onAdd={handleAddUser} />
      </div>

      {selectedUser && (
        <EditUserDialog
          user={selectedUser}
          onEdit={(updatedUser) => {
            handleEditUser(updatedUser)
            setSelectedUser(null)
          }}
          onCancel={() => setSelectedUser(null)}
        />
      )}
    </div>
  )
}
