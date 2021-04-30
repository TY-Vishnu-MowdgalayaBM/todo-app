import React from 'react'

interface buttonProps {
    text: string;
    onClick: () => void;
    color: string
}

const Button: React.FC<buttonProps> = ({ text, onClick, color }) => {
    return (
        <div>
            <button onClick={onClick} className='btn' style={{ backgroundColor: color }}>{text}</button>
        </div>
    )
}

export default Button
