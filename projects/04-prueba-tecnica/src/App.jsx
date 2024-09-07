import { useState, useEffect } from "react"

// const CAT_ENDPOINT_IMAGE_URL = '?size=50%color=red&json=true' ya no funciona para el 2024
const CAT_ENDPOINT_RANDOM_FACT = '/api/fact'

export default function App() {
    const [fact, setFact] = useState(' ')
    const [image, setImage] = useState('')

    useEffect(() => {
        // console.log(CAT_ENDPOINT_RANDOM_FACT)
        fetch(CAT_ENDPOINT_RANDOM_FACT, {
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(res => res.json())
            .then(data => {
                const newFact = data.fact;
                setFact(newFact);

                const firstWord = newFact.split(' ')[0];

                fetch(`/imageurl`)
                    .then(res => res.json())
                    .then(data => {
                        const { url } = data[0]
                        setImage(url)
                    })
            })
    }, [])

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {image && <img src={image} alt={`Image extracted using the first word for ${fact}`} />}
        </main>
    )

}