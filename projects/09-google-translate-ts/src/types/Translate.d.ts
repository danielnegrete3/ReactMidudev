import { AUTO_LANGUAGE, LANGUAGES } from "../consts/languages";

export type Languages = keyof typeof LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromText = string
export type ToText = string

export type FromLanguage = Languages | AutoLanguage