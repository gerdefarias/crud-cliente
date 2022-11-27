import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const [ select, setSelect ] = useState('nome');

  const { cliente, 
    clientes, 
    novoCliente,
    salvarCliente, 
    selecionarCliente, 
    excluirCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-zinc-800 to-gray-500
      `}>
      <Layout titulo="Cadastro de Cliente">
        {tabelaVisivel ? (
        <>
          <div className="flex justify-between">
            <div className="flex items-center text-xs sm:text-sm">

              <span className="p-1">Ordenar por:</span>

              <select className="p-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="ordena" value={select} onChange={ e => setSelect(e.target.value)} >
                <option value="nome" selected> Nome </option>
                <option value="idade"> Idade </option>
              </select>

            </div>
            <Botao className="mb-4"
              onClick={novoCliente}>
              Novo Cliente</Botao>
          </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={selecionarCliente} 
              clienteExcluido={excluirCliente} 
              selected={select}
            />
        </>
        ) : (
          <Formulario 
            cliente={cliente} 
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
