import React from 'react'
import Button from './Button'


interface headerProps {
    title: string;
    onAdd: () => void;
    showTask: boolean;
}

const Header: React.FC<headerProps> = ({ title, onAdd, showTask }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text={showTask ? 'close' : 'add'} color={showTask ? 'red' : 'green'} onClick={onAdd} />
        </header>
    )
}

export default Header
