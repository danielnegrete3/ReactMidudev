import {BUTTONS, EVENTS} from "../Utils/constants"

export function navigation(href){
    window.history.pushState({},"",href)
    const NavigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(NavigationEvent)
}

export default function Link({to, target, ...paramethers}){

    const handleClick = (event)=>{
        const isMainClick = BUTTONS.PRIMARY === event.button
        const isManegeableEvent = target === undefined || target === '_self'
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey

        if (isMainClick && isManegeableEvent && !isModifiedEvent){
            event.preventDefault()
            navigation(to)
        }

    }

    return <a onClick={handleClick} href={to} target={target} {...paramethers}/>
}