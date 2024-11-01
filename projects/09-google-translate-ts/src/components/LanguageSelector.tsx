import { Form } from "react-bootstrap";
import { FromLanguage, Languages, SectionTypesConst } from "../types/Translate.d";
import { AUTO_LANGUAGE, LANGUAGES } from "../consts/languages";

type Props =
{type: typeof SectionTypesConst.From, value: string, onChange: (value: FromLanguage) => void } //From
|{type: typeof SectionTypesConst.To, value: string, onChange: (value: Languages) => void } //To


export function LanguageSelector({onChange,type,value}:Props){

    const handleChange = (event : React.ChangeEvent<HTMLSelectElement>)=>{
        onChange(event.target.value as Languages)
    }

    return(
        <Form.Select onChange={handleChange} value={value} aria-label='Selecciona el idioma'>
            {type === SectionTypesConst.From && <option value={AUTO_LANGUAGE}>Auto Detectado</option>}
            {
                Object.entries(LANGUAGES).map(([key,value])=>{
                    return(
                        <option key={key} value={key}>{value}</option>
                    )
                })
            }
        </Form.Select>
    )
}