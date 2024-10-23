import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children}) => {

    const [account, setAccount] = useState('');
    const [loginDialog, setLoginDialog] = useState(false);

    return(
        <DataContext.Provider value = {{
            account,
            setAccount,
            loginDialog,
            setLoginDialog
        }}>
            { children }
        </DataContext.Provider>
    )
}

export default DataProvider;