import Link from "../Route/Link";

export default function HomePage(){
    
    return (
        <>
            <h1>About me</h1>
            <div>
                <img src="/MiImagen" alt="Mi imagen" />
            </div>
            <Link to="/">Ir a home</Link>
         </>
    )
}