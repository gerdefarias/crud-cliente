import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente("João Cordeiro", 34, "1"),
    new Cliente("Antonio Luiz", 45, "2"),
    new Cliente("Carlos Alexandre", 23, "3"),
    new Cliente("Bianca Fernandez", 22, "4"),
    new Cliente("Maria Fátima", 32, "5"),
    new Cliente("Mirela Sanches", 19, "6"),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.id+" "+cliente.nome)
  }
  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir... ${cliente.id+" "+cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela")

  return (
    <div className="flex">
            <div className="flex items-center px-20">
                <Menu></Menu>
            </div>

            <div className={` 
                flex justify-center items-center h-screen w-screen
                bg-gradient-to-r from-blue-500 to-purple-500
                text-white
                `}>
                <Layout titulo="Cadastro Simples">
                    {visivel === "tabela" ? (
                    <>
                    <div className="flex justify-end">
                        <Botao className="mb-4"
                        onClick={() => setVisivel("form")}>
                        Novo Cliente</Botao>
                    </div>
                        <Tabela clientes={clientes}
                        clienteSelecionado={clienteSelecionado} 
                        clienteExcluido={clienteExcluido} 
                        />
                    </>
                    ) : (
                    <Formulario 
                        cliente={clientes[1]} 
                        clienteMudou={salvarCliente}
                        cancelado={() => setVisivel("tabela")}
                    />
                    )}
                </Layout>
            </div>
    </div>
  )
}
