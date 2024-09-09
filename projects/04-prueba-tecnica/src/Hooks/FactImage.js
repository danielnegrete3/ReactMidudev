import { useState, useEffect } from "react"
import { CatFact } from "../Servises/CatFact"
import { CatImage } from "../Servises/CatImage"

export function useFactImage(){
    const [fact, setFact] = useState(' ')
    const [image, setImage] = useState('')

    const refresh = async ()=>{
        let newFact = await CatFact()
        let newImage = await CatImage()
        setFact(newFact)
        setImage(newImage)
    }

    useEffect(() => {
        refresh()
    }, [])

    return {fact,image, refresh}
}