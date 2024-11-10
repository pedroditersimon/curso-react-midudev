import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constants";

export type Lang = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLang = typeof AUTO_LANGUAGE;
export type FromLang = Lang | AutoLang;

export interface State {
    fromLang: FromLang,
    toLang: Lang,
    fromText: string,
    result: string,
    loading: boolean
};

export type Action =
    | { type: 'SetFromLang', payload: FromLang }
    | { type: 'SetToLang', payload: Lang }
    | { type: 'SetFromText', payload: string }
    | { type: 'SetResult', payload: string }
    | { type: 'InterchangeLang' };

export enum OptionType {
    From = 'from',
    To = 'to'
}