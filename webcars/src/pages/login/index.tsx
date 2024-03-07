import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.svg";
import { Container } from "../../components/container";
import { Input } from "../../components/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .email("Insira um e-mail válido.")
    .min(1, "Campo e-mail não pode ser vazio."),
  password: z.string().min(1, "Digite uma senha válida."),
});

type FormData = z.infer<typeof schema>;

export function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Link to="/" className="mb-6 max-w-sm w-full">
          <img src={logoImage} alt="Logo" className="w-full" />
        </Link>

        <form
          className="bg-white max-w-xl w-full rounded-lg p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <Input
              type="email"
              placeholder="Digite aqui o seu e-mail"
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>

          <div className="mb-3">
            <Input
              type="password"
              placeholder="****"
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>

          <button
            className="bg-zinc-900 w-full rounded-lg text-white font-medium h-10"
            type="submit"
          >
            Acessar
          </button>
        </form>

        <Link to="/register" className="italic text-slate-600">
          Não possui uma conta? Registre-se.
        </Link>
      </div>
    </Container>
  );
}
