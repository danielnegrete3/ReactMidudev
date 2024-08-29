import { Fragment } from "react"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App (){
    const rest = { userName: 'unknow', name:'Unknow'}
    return (

        <Fragment > 
            {/* or with <></> */}
            <TwitterFollowCard  
                userName="midudev" 
                name="Miguel" 
                // isFollowing={true} 
                />
                {/* rest operator  */}
            <TwitterFollowCard  
                userName="peralb" 
                name="Pablo" 
                // isFollowing 
                />
            <TwitterFollowCard  
                userName="elonmusk" 
                name="Elon" 
                // isFollowing={true} 
                />
            <TwitterFollowCard  
                userName="vxnder" 
                name="Venderhart" 
                // isFollowing={false} 
                />
            <TwitterFollowCard  
                { ... rest}
                />
        </Fragment>
    )
}

