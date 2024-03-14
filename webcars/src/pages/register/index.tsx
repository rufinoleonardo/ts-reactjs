import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import LogoImage from "../../assets/logo.svg";
import { Container } from "../../components/container";
import { Input } from "../../components/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../services/firebaseConnection";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";

const schema = z.object({
  name: z
    .string()
    .min(3, "Não reconheço nome com menos de 3 caracteres.")
    .regex(/\w+ .+/, "Por favor, digite seu nome e sobrenome."),
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

  const { handleUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function handleSignOut() {
      await signOut(auth);
    }

    handleSignOut();
  }, []);

  async function onSubmit(data: FormData) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (user) => {
        await updateProfile(user.user, { displayName: data.name });

        handleUserInfo({
          name: data.name,
          email: data.email,
          uid: user.user.uid,
        });

        console.log("Cadastrado com sucesso!");
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        console.log("Erro ao cadastrar este usuário.");
        console.log(err);
      });
  }

  return (
    <Container>
      <div className="w=full min-h-screen flex flex-col justify-center items-center">
        <Link to="/" className="mb-6 max-w-sm w-full m-auto">
          <img src={LogoImage} alt="Logo" className="w-full" />
        </Link>

        <form
          className="bg-white max-w-xl w-full rounded-lg p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <Input
              name="name"
              placeholder="Digite aqui o seu nome completo..."
              type="text"
              error={errors.name?.message}
              register={register}
            />
          </div>

          <div className="mb-3">
            <Input
              name="email"
              placeholder="Digite aqui o seu email..."
              type="email"
              error={errors.email?.message}
              register={register}
            />
          </div>

          <div className="mb-3">
            <Input
              name="password"
              placeholder="******"
              type="password"
              error={errors.password?.message}
              register={register}
            />
          </div>

          <button className="w-full h-11 font-medium text-white bg-slate-700 rounded-lg">
            Registrar
          </button>
        </form>
      </div>
    </Container>
  );
}
