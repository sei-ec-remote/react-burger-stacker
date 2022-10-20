import React, {Component} from "react";
import BurgerStacker from "./BurgerStacker";

class BurgerPane extends Component {

    state = {
        
    }

    render(){
        return(
            <>
                <div className='burger-pane'>
                    <BurgerStacker/>
                </div>
            </>
        )
    }
}

export default BurgerPane