import { Form } from "react-bootstrap";
import { OptionType } from "../types.d";

const commonStyles = { border: 0, height: '200px' };

const getPlaceholder = ({ type, loading }: { type: OptionType, loading?: boolean }) => {
    if (type === OptionType.From) return 'Introducir texto';
    if (loading === true) return 'Cargando...';
    return 'Traducción';
};

interface Props {
    type: OptionType,
    loading?: boolean,
    value: string,
    onChange: (value: string) => void
}


export function TextArea({ type, loading, value, onChange }: Props) {
    const styles = type === OptionType.From
        ? commonStyles
        : { ...commonStyles, backgroundColor: '#f5f5f5' };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    return (
        <Form.Control
            autoFocus={type === OptionType.From}
            as='textarea'
            disabled={type === OptionType.To}
            placeholder={getPlaceholder({ type, loading })}
            style={styles}
            value={value}
            onChange={handleChange}
        />
    );
}