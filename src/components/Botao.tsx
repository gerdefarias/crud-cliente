interface BotaoProps {
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    return(
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-gray-400 to-gray-700 text-white 
            px-4 py-1 rounded-md mb-2
            ${props.className}
            } 
        `}>
            {props.children}
        </button>
    )
}