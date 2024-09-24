import Link from "../Route/Link";

export default function HomePage(){
    
    return (
        <>
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat distinctio omnis, eos inventore consequuntur, facere incidunt tempora repellendus exercitationem sunt laborum! Illo ab dignissimos nisi aperiam incidunt aliquid saepe.</p>   
            <Link to="/about">Ir a about</Link>
         </>
    )
}