import { useForm } from "react-hook-form";
import LogoImage from "../../assets/logo.svg";
import { Container } from "../../components/container";
import { Input } from "../../components/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const schema = z.object({
  name: z.string().min(4, "Digite seu nome completo."),
  email: z.string().email("Insira um e-mail válido"),
  password: z.string().min(6, "A senha precisa conter no mínimo 6 caracteres."),
});

type FormData = z.infer<typeof schema>;

export function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  return (
    <Container>
      <div className="w=full min-h-screen flex flex-col justify-center items-center">
        <Link to="/" className="mb-6 max-w-sm w-full">
          <img src={LogoImage} alt="Logo" />
        </Link>

        <form className="bg-white max-w-xl w-full rounded-lg p-4">
          <div className="mb-3">
            <Input
              name="name"
              placeholder="Digite aqui o seu nome completo..."
              type="text"
              error={errors.name?.message}
              register={register}
            />
          </div>

          {/** ! fazer inputs de EMAIL e Password */}
        </form>
      </div>
    </Container>
  );
}
