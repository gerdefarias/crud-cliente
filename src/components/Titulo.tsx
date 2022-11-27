export default function Titulo(props){
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-2 py-2 text-2xl text-center">
                {props.children}
            </h1>
            <hr className="border-2 border-gray-500" />
        </div>
    )
}