//This file is basically for state management , we are using this instead
//of using a redux store
//It will change the state of the city dates and option on the home page search bar
//whenever the action is fired
//we have written switch case for various actions that can be performed
//They can be new Search or resetting the old one or default
import { createContext, useReducer } from "react"

const INITIAL_STATE = {
    city: undefined,
    dates : [],
    options: {
        adult: undefined,
        children: undefined,
        room: undefined
    },
}

export const SearchContext = createContext(INITIAL_STATE);

const searchReducer = (state,action) =>{
    switch(action.type) {
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;
    };
}

export const SearchContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

    return (
            <SearchContext.Provider
                value={{
                    city: state.city,
                    date:state.date,
                    options: state.options,
                    dispatch,
                }}
            >
                {children}
            </SearchContext.Provider>
    )
}