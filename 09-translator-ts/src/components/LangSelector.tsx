import { Form } from "react-bootstrap";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";
import React from "react";
import { type FromLang, OptionType, type Lang } from "../types.d";

type Props =
    {
        type: OptionType.From
        value: FromLang
        onChange: (lang: FromLang) => void
    }
    | {
        type: OptionType.To
        value: Lang
        onChange: (lang: Lang) => void
    }

export function LangSelector({ type, value, onChange }: Props) {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Lang);
    };

    return (
        <Form.Select aria-label="Idioma" value={value} onChange={handleChange} >
            {type === OptionType.From && <option value={AUTO_LANGUAGE}>Detectar</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    );
}