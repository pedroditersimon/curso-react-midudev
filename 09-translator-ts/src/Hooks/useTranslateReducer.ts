import { useReducer } from 'react';
import { type Action, type State, type FromLang, type Lang } from '../types';

const initialState: State = {
    fromLang: 'auto',
    toLang: 'en',
    fromText: '',
    result: '',
    loading: false
};



function reducer(state: State, action: Action) {
    const { type } = action;

    if (type === 'InterchangeLang') {
        if (state.fromLang === 'auto') return state;

        return {
            ...state,
            fromLang: state.toLang,
            toLang: state.fromLang,
            loading: true,
            result: ''
        };
    }

    if (type === 'SetFromLang') {
        return {
            ...state,
            fromLang: action.payload,
            loading: true,
            result: ''
        };
    }

    if (type === 'SetToLang') {
        return {
            ...state,
            toLang: action.payload,
            loading: true,
            result: ''
        };
    }

    if (type === 'SetFromText') {
        return {
            ...state,
            fromText: action.payload,
            loading: true,
            result: ''
        };
    }

    if (type === 'SetResult') {
        return {
            ...state,
            result: action.payload,
            loading: false
        };
    }


    return state;
}


export function useTranslateReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const interchangeLang = () => {
        dispatch({ type: 'InterchangeLang' });
    };

    const setFromLang = (payload: FromLang) => {
        dispatch({ type: 'SetFromLang', payload });
    };

    const setToLang = (payload: Lang) => {
        dispatch({ type: 'SetToLang', payload });
    };

    const setFromText = (payload: string) => {
        dispatch({ type: 'SetFromText', payload });
    };

    const setResult = (payload: string) => {
        dispatch({ type: 'SetResult', payload });
    };

    return {
        ...state,
        interchangeLang,
        setFromLang,
        setToLang,
        setFromText,
        setResult
    };
}