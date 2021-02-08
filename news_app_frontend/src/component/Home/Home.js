import  React from "react";

import General from "./General";

class Home extends React.Component{
    render(){
        return(
            <div>
                <General countryCode={"in"}/>
            </div>
        )
    }
}
export default Home;