"use client"

import { useState } from "react"

const Counter = () => {
    const [value, setValue] = useState(0);
    return (
        <input 
        type="number" 
        value={value} onChange={(ev) => {
            const maybeIntValue = Number.parseInt(ev.target.value, 10);
            if (Number.isInteger(maybeIntValue)) {
                setValue(maybeIntValue);
            }
        }} />
    );
}

export default Counter;