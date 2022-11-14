import { once } from "lodash";
import { createContext, useContext } from "react";

export const randomStr = (len: number = 16) => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charsLength = chars.length;
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
  }

  return result;
};

// @ts-ignore
export const createStateContext = once(<T,>() => createContext({} as State<T>));
export const useStateContext = <T,>() => useContext(createStateContext<T>());
// export 