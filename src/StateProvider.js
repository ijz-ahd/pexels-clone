import React, { createContext, useContext, useReducer } from "react";

//initializing or creating the data layer
export const StateContext = createContext();

//creating wrapper function
export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//exporting datalayer
export const useStateValue = () => useContext(StateContext);
