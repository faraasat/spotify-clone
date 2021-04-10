import { createContext, FC, useContext, useReducer } from "react";

interface IDataLayer {
  initialState: any;
  reducer: any;
}

export const DataLayerContext = createContext({});

export const DataLayer: FC<IDataLayer> = ({
  initialState,
  reducer,
  children,
}): any => {
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>;
};
