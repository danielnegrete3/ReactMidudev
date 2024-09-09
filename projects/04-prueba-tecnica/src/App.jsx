import { useFactImage } from "./Hooks/FactImage"
import './style.css'

// const CAT_ENDPOINT_IMAGE_URL = '?size=50%color=red&json=true' ya no funciona para el 2024
const CAT_ENDPOINT_RANDOM_FACT = '/api/fact'

export default function App() {
    const {fact,image,refresh} = useFactImage()

    return (
        <main >
            <h1>App de gatitos</h1>
            <button onClick={refresh}>New fact and image</button>
            {fact && <p>{fact}</p>}
            {image && <img src={image} alt={`Image extracted using the first word for ${fact}`} />}
        </main>
    )

}