import Titulo from "./Titulo"

interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps){
    return (
        <div className={`
            flex flex-col w-full sm:w-1/2
            bg-gray-300 text-gray-800 rounded-md
        `}>

            <Titulo>{props.titulo}</Titulo>
            <div className="p-2">
                {props.children}
            </div>

        </div>
    )
}