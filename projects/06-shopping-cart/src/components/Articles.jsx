import { Article } from './Article'
import './Articles.css'


export function Articles({articles}){
    return(
        <main className='articulos'>        
            <ul >
                {
                    articles.slice(0,10).map(article => 

                        <li key={article.id} className='articulo'>
                            <Article  article={article}/>
                        </li>
                    )
                }
            </ul>
        
        </main>
    )   
}