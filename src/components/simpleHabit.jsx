import React, { useEffect, useState, useRef, useCallback } from 'react';

const SimpleHabit = (props) => {
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    })
    useEffect(()=> {
        console.log(`mounted & updated!: ${count}`)
    }, [count])
    // 뒤에 배열 인자 넣어서 해당 값이 변할 때에만 호출이 되게, 빈배열시에 처음에만 호출
    return (
        <li className='habit'>
        <span ref={spanRef} className="habit-name">Reading</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={handleIncrement}
        >
        <i className="fas fa-plus-square"></i>
        </button>
        </li>
    );
};

export default SimpleHabit;

