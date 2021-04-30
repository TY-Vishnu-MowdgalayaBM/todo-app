import React, { FormEvent, useState } from 'react'

interface addTaskProps {
    onAdd: addTask
}

const AddTask: React.FC<addTaskProps> = ({ onAdd }) => {
    const [text, setText] = useState<string>('')
    const [day, setDay] = useState<string>('')
    const [reminder, setReminder] = useState<boolean>(false)

    const handelChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handelChangeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDay(e.target.value)
    }

    // const handelChangeReminder = (e: SetStateAction<boolean>) => {
    //     setReminder(e.currentTarget.checked)
    // }

    const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!text) {
            alert('please fill the text')
            return
        }
        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)

    }

    return (
        <form className='add-form' onSubmit={(handelSubmit)}>
            <div className='form-control'>
                <label htmlFor="">Task</label>
                <input type="text" value={text} onChange={handelChangeText} />
            </div>
            <div className='form-control'>
                <label htmlFor="">date and time</label>
                <input type="text" value={day} onChange={handelChangeDay} />
            </div>
            <div className='form-control'>
                <label htmlFor="">Reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input className='btn btn-block' type="submit" value='Save Task' />
        </form>
    )
}

export default AddTask
