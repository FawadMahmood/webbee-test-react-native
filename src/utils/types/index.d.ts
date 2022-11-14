// `stores` layer
interface IStore {
  hydrate?: () => PVoid;
}

type StoreDefaultKeys = 'set' | 'setMany' | 'hydrate';
type StoreKeysOf<S> = keyof Omit<S, StoreDefaultKeys>;

// `services` layer
interface IService {
  init: () => PVoid;
}

// System
type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;
type PureFunc = () => void;
type PureFuncAsync = () => PVoid;
type PureFuncArg<T> = (value?: T) => void;

// Design system
type StatusBarStyle = 'light' | 'dark' | undefined;
type ThemeColors = {
  textColor: string;
  bgColor: string;
  bg2Color: string;
};



type FieldType = "text" | "number" | "date" | "checkbox"

type Field = {
  name?: string;
  type: FieldType
}

type Category = {
  id: string;
  name?: string;
  fields?: Field[]
}

interface AddCategory {
  type: string;
  category: Category
}

interface DeleteCategory {
  type: string;
  id: string
}

type CategoriesActionTypes_U = (AddCategory & DeleteCategory); // Union Types


interface AppState {
  categories: Category[];
}