
const CAT_ENDPOINT_RANDOM_FACT = '/api/fact'

export async function CatFact(){
    
    return fetch(CAT_ENDPOINT_RANDOM_FACT, {
        'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then(res => res.json())
        .then(data => {
            return data.fact
            // const firstWord = newFact.split(' ')[0]; in the free vertion of api cant use the facts 
        })
}