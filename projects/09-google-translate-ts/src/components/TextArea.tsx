import { Form } from "react-bootstrap";
import { SectionType, SectionTypesConst } from "../types/Translate.d";

const commonStyles = { border: 0, height: '200px', display : 'block' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionTypesConst.From) return 'Introducir texto'
  if (loading === true) return 'Cargando...'
  return 'Traducción'
}

interface Props {
    type: SectionType
    loading: boolean 
    onChange: (value: string) => void
    value: string
}

export function TextArea({type,loading,onChange,value}:Props){
    const styles = type === SectionTypesConst.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

    const handleChange = (event : React.ChangeEvent<HTMLTextAreaElement>) =>{
        onChange(event.target.value)
    }

    return (
        <Form.Control
            autoFocus={type === SectionTypesConst.From}
            as='textarea'
            disabled={type === SectionTypesConst.To}
            placeholder={getPlaceholder({type,loading})}
            value={value}
            style={styles}
            onChange={handleChange}
        />
    )
}