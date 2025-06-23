// dialog-form.tsx
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { positions } from "../../helpers/positions"
import { initialUsers } from "@/crud-app/helpers/defaultValues"
import { Checkbox } from "@/components/ui/checkbox"
import { roles } from "@/crud-app/helpers/roles"
import type { User } from "@/crud-app/types/user"

export function DialogForm({ form, onSubmit }: { form: any; onSubmit: (data: User) => void }) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="prenom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input placeholder="Prénom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-1 sm:col-span-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem className="col-span-1 sm:col-span-2">
              <div className="mb-4">
                <FormLabel className="text-base">Roles</FormLabel>
                <FormDescription>
                  Sélectionne les rôles à attribuer à l'utilisateur :
                </FormDescription>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {roles.map((r) => (
                  <FormField
                    key={r}
                    control={form.control}
                    name="items"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(r)}
                            onCheckedChange={(checked) => {
                              console.log(checked)
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {r}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem className="col-span-1 sm:col-span-2">
              <FormLabel>Position</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez une position" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {positions.map((pos) => (
                    <SelectItem key={pos} value={pos}>
                      {pos}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-1 sm:col-span-2">
          <Button type="submit" className="mt-4">
            Entrer
          </Button>
        </div>
      </form>
    </Form>
  )
} 
