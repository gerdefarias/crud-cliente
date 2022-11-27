import Cliente from "../core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
    selected: string
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return (
            <tr>
                <th className="text-center sm:text-left text-sm sm:p-2">Código</th>
                <th className="text-center sm:text-left text-sm sm:p-4">Nome</th>
                <th className="text-center text-sm sm:p-2">Idade</th>
                {exibirAcoes ? <th className="sm:p-4">Ações</th> : false}
            </tr>
        )
    }


    function renderizarDados(){
        // Ordenando o array mapeado contendo os dados resumidos
        props.clientes.sort(function(a, b) {
                return (
                    props.selected === "nome" ? +(a.nome > b.nome) || +(a.nome === b.nome) - 1 
                   :
                    +(a.idade > b.idade) || +(a.idade === b.idade) - 1              
                )
        }); 

        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}>
                    <td className="text-left text-gray-400 text-xs p-1 sm:p-2">{ cliente.id.substring(0,10).toUpperCase()}</td>
                    <td className="text-left text-xs p-1 sm:p-4">{cliente.nome}</td>
                    <td className="text-center text-xs p-1 sm:p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    } 

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-1 m-1
                        hover:bg-purple-50
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false
                }
                {props.clienteExcluido? (
                        <button onClick={() => props.clienteExcluido?.(cliente)}className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-1 m-1
                        hover:bg-purple-50
                    `}>
                        {IconeLixo}
                    </button>
                ) : false
                }

            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-100
                bg-gradient-to-r from-gray-500 to-gray-800
            `}>
              {renderizarCabecalho()}
            </thead>
            <tbody>
               {renderizarDados()} 
            </tbody>

        </table>
    )
}