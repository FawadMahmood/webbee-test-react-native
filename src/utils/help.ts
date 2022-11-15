import { once } from "lodash";
import { createContext, useContext } from "react";

// @ts-ignore
export const createStateContext = once(<T,>() => createContext({} as State<T>));
export const useStateContext = <T,>() => useContext(createStateContext<T>());
// export 


export const getRelevantTypeDataEmptyData = (type: FieldType) => {
    switch (type) {
        case "checkbox":
            return false
        case "date":
            return new Date();
        case "number":
            return 0;
        case "text":
            return "";
    }
}


export const inputTypes = [
    { label: 'Text', value: 'text' },
    { label: 'Number', value: 'number' },
    { label: 'Checkbox', value: 'checkbox' },
    { label: 'Date', value: 'date' }
];