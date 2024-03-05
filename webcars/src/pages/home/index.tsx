import { Container } from "../../components/container";

export function Home() {
  return (
    <Container>
      <section className="w-full max-w-3xl p-4 rounded-lg bg-white mx-auto flex justify-center items-center gap-2">
        {/* Section do BUSCAR */}
        <input
          className="w-full border-2 rounded-lg h-9 px-3"
          placeholder="Digite o nome do carro..."
        />
        <button className="bg-red-500 h-9 px-3 rounded-lg text-white font-medium text-lg">
          Buscar
        </button>
      </section>

      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Carros novos e usados em todo o Brasil
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://img2.icarros.com/dbimg/imgnoticia/4/25142_1"
            alt="carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">Nome do carro</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-600 mb-6">
              Ano 2016/2016 | 23.000 km
            </span>
            <strong className="text-xl text-black font-medium">
              R$32.000,00
            </strong>
          </div>
          <div className="w-full h-px bg-slate-300 my-2"></div>
          <div className="px-2 pb-2">
            <span className="text-zinc-600">Curitiba - PR</span>
          </div>
        </section>
      </main>
    </Container>
  );
}
