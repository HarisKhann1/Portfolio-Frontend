import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import React, {useState} from "react"
import { useForm } from "react-hook-form"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    console.log("Email:", data.email);
    console.log("Password:", data.password);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(submitHandler)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email address" } })}
                  className={errors.email ? "border border-red-500" : ""}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                {...register("password", { required: "Password is required", minLength: {value: 8, message: "Password must be at least 8 characters long" }, maxLength: {value: 20, message: "Password must be less than 20 characters long" } })} 
                className={errors.password ? "border border-red-500" : ""}
                id="password" 
                type="password" 
                placeholder="Enter your Password" 
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </Field>
              <Field>
                <Button
                className="cursor-pointer" 
                 type="submit" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
