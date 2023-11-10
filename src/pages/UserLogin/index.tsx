import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { NavLink } from "react-router-dom";
import "./styles.css";

const createUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatorio")
    .email("Formato de email invalido")
    .toLowerCase(),
  password: z.string().min(8, "Senha precisa no minimo 8 caracteres"),
});

type createUserFormData = z.infer<typeof createUserFormSchema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  return (
    <div className="container">
      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <input {...register("email")} />
        {errors.email?.message && <p>{errors.email?.message}</p>}
        <input
          type="number"
          {...register("password", { valueAsNumber: true })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <input type="submit" />
      </form>

      <div className="login-footer">
        <p>Nao possui uma conta? </p>{" "}
        <NavLink to="/register">criar conta</NavLink>
      </div>
    </div>
  );
}
