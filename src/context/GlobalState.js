import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// INITIAL LIST OF VESSELS
const initialState = {
  vessels: [],
};

// CREATE GLOBAL CONTEXT USING INITIAL LIST OF VESSELS
export const GlobalContext = createContext(initialState);

// PROVIDER
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // ADD NEW VESSEL
  const addVessel = (Vessel) => {
    dispatch({
      type: "ADD_VESSEL",
      payload: Vessel,
    });
  };
  // EDIT EXISTING VESSEL
  const editVessel = (Vessel) => {
    dispatch({
      type: "EDIT_VESSEL",
      payload: Vessel,
    });
  };
  // DELETE VESSEL
  const removeVessel = (id) => {
    dispatch({
      type: "REMOVE_VESSEL",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        vessels: state.vessels,
        removeVessel,
        addVessel,
        editVessel,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
