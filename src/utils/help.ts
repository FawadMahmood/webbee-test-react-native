import { once } from "lodash";
import { createContext, useContext } from "react";

// @ts-ignore
export const createStateContext = once(<T,>() => createContext({} as State<T>));
export const useStateContext = <T,>() => useContext(createStateContext<T>());
// export 