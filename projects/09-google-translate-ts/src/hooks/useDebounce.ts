import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 500){
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(()=>{
        const timer = setTimeout(() => {
            setDebouncedValue(value)
          }, delay)
      
        return () => { clearTimeout(timer) }
        // Si hay un cambio en value o delay el time se reinicia por eso clearTimeout
    },[value,delay])

    return debouncedValue
}