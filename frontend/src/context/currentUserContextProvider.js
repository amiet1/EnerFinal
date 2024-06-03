//import the context and useState
//destructure children 
//set what the context is 

import { useState } from 'react';
import context from './current-context';

const currentUserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const contextValues = {currentUser,setCurrentUser};
    
  return (
    <currentUserContextProvider value={contextValues}>
        {children}
    </currentUserContextProvider>
  );
};

export default currentUserContextProvider;
