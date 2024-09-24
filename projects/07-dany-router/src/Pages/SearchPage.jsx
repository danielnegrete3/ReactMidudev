
export default function SearchPage({routeParams}){
    const i18n = {
        es : "Estas buscando",
        en : "You search"
    }

    const text = i18n[routeParams['lang']]?? i18n.es

    return(
        <h1>{ text } {routeParams.query}</h1>
    )
}