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
  id: string;
  category_id: string;
  name?: string;
  type: FieldType;
  value?: string | number | typeof Date
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

interface AddField {
  type: string;
  field: Field
}

interface DeleteCategory {
  type: string;
  id: string
}

type FieldsActionTypes_U = (AddField)

type CategoriesActionTypes_U = (AddCategory & DeleteCategory); // Union Types


interface AppState {
  categories: Category[];
}

interface IconProps {
  vector: icon_vector;
  name: string;
  size: number;
  color: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void | undefined
}

// handleChange,handleBlur,handleSubmit,values
interface FormElement {
  onTextChanged: (key: string, value: any) => void;
  // handleChange?: (key: string, value: any) => void;
  // handleBlur?: (key: string) => void;
  // handleSubmit?: () => void;
  // values: any;
  // setFieldValue: (key: string, value: any) => void;
}