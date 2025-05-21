import React, {useState} from 'react';

const CounterCard = ({title}) => {
    const [count, setCount] = useState(0);

    return(
        <div className='card shadow-sm mb-3'>
        <div className='card-body text-center'>
        <h5 className='card-title'> {title}</h5>
        <p className='card-text fs-4'>Count: {count}</p>
    <div className='d-flex justify-content-center gap-2'>
        <button className='btn btn-success' onClick={()=> setCount (count+1)}>+1</button> 
        <button className='btn btn-secondary' onClick ={()=> setCount(0)}>Reset</button>
           </div>
        </div>
        </div>
    );
};

export default CounterCard;