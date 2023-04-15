import { useState } from 'react'

const Counter = () => {    
    const [count, setCount] = useState(0)
    
    return (    
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>      
            <button onClick={() => setCount(0)}>
                Restart
            </button>  
        </div>              
    )
}

export default Counter