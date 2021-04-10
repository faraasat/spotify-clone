import { createContext, FC, useContext, useReducer } from "react";
// import { initialState } from "./reducer";

interface IDataLayer {
  initialState: any;
  reducer: any;
}

export const DataLayerContext: any = createContext([]);

export const DataLayer: FC<IDataLayer> = ({
  initialState,
  reducer,
  children,
}): any => {
  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue: any = () => useContext(DataLayerContext);
