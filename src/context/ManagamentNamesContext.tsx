import { createContext, ReactNode, useState } from "react";

interface ManagamentNamesContextData{
    list:string[];
    sortear:()=>void;
    sorteado:number;
    issorted:boolean;
    handleAdd:(name:string)=>void;
    removeName:(posicao:number)=>void;
}

interface ManagamentNamesProviderProps{
    children:ReactNode;
}

export const ManagamentNamesContext = createContext({}as ManagamentNamesContextData);

export function ManagamentNamesProvider({children}:ManagamentNamesProviderProps){

    const[list, setList] = useState<string[]>([])
    const [sorteado, setSorteado] = useState(0)
    const [issorted, setIssorted] = useState(false)

    function sortear() {
        console.log("qualquer merda")
        setSorteado(Math.floor(Math.random()*list.length))
        setIssorted(true)
    }

    function handleAdd(name:string) {
        if(name!=""){
            setList(current => [...current, name])
        }
    }

    function removeName(posicao:number) {
        setList(current => current.filter((item,index) => index!=posicao))
    }
    

    return(
        <ManagamentNamesContext.Provider 
            value={{list, sortear, sorteado, issorted, removeName, handleAdd}}
        >
            {children}
        </ManagamentNamesContext.Provider>
    );
}

