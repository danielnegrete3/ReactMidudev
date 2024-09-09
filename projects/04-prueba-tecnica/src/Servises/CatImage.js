export async function CatImage(){
    let res = await fetch(`/imageurl`)
    let data = await res.json()
    return data[0].url
}