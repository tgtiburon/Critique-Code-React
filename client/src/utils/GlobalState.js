import React, { createContext, useContext } from 'react';

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ value: [], ...props}) => {
    const [state, dispatch] = useAppReducer({
        /*
        
        NEED TO ADD GLOBAL STATE OBJECTS HERE
        
        */
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext };