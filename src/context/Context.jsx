import { createContext } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {


    const onSent = async (props) => {
        await runChat(prompt)
    }

    

    const contextValue = {

    }

    return(
        <ContextProvider value={contextValue}>
            {props.children}
        </ContextProvider>
    )

}

export default ContextProvider
