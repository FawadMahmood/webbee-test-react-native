interface IService {
    init: () => PVoid;
}
type Services = Record<string, IService>;

interface IStore {
    hydrate?: () => PVoid;
}
type Stores = Record<string, IStore>;

type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;
type PureFunc = () => void;

type DesignSystemColors = Record<string, string>;
type AppearanceMode = 'light' | 'dark';
type StatusBarStyle = 'light-content' | 'dark-content' | undefined;
type ThemeColors = {
    textColor: string;
    bgColor: string;
    bg2Color: string;
};
type CurrentAppearance = {
    value: AppearanceMode;
    system: boolean;
};

type Language = 'en' | 'ru';

// SERVICES
type AppType = 'one_screen' | 'three_tabs';

// STORES
type UIAppearance = 'System' | 'Light' | 'Dark';
type UILanguage = 'System' | 'English' | 'Russian';

// SCREENS
// Props
type ExampleScreenProps = {
    value?: number;
};

// Settings
type AppearanceAction = {
    name: UIAppearance;
};

type LanguageAction = {
    name: UILanguage;
};

// API
// Responses
type CounterGetResponse = {
    value: number;
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

interface DeleteField {
    type: string;
    id: string
}

type FieldsActionTypes_U = (AddField & DeleteField)

type CategoriesActionTypes_U = (AddCategory & DeleteCategory); // Union Types


interface AppState {
    categories: Category[];
    fields: Field[];

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