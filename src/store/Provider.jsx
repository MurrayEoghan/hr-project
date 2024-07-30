import { createContext, useState } from "react";
import _ from 'lodash'

const state = {
    user: {
        username: ''
    }
}

export const AppContext = createContext(state)

const AppProvider = ({children}) => {
    const [appState, setAppState] = useState(state)

    const set = (value) => {
        setAppState(prevState => _.mergeWith(prevState, value))
    }

    return (
        <AppContext.Provider value={{
            appState,
            set
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider