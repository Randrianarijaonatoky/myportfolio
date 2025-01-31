import { useState } from 'react'
import './practice.css'
function Practice() {
    const [counter, setCounter] = useState(8);
    const increment = ()=>{
        setCounter(counter => counter+1);
    }
    const decrement = ()=>{
        if(counter === 0) return;
        setCounter(counter => counter-1);

    }
    
    
    return(
        <div className="practice">
            {
                counter < + 9 ?
                    <button className="practiceBtn"
                        onClick={() =>increment()}
                    >+</button>
                : null
            }
                
                
                <h2>{counter}</h2> 

            {   
                 counter !== 0 ?                       
                <button className="practiceBtn"
                onClick={() =>decrement()}
                >-</button>
                : null
            }

        </div>
    )
}
export default Practice