import { useEffect, useRef, useState } from 'react'

enum ItemState {
    ShowActions,
    Edit,
}

export interface ListItemProps {
    item: string
    setItem: (v: string) => void
    deleleItem: () => void
    counter: number
}

export default function ListItem(props: ListItemProps) {

    const [state, setState] = useState(ItemState.ShowActions)
    const [temp, setTemp] = useState("")

    function getValue(event: any) {
        console.log(event.target.value)
        setTemp(event.target.value)
    }


    function edit() {
        setTemp(props.item)
        setState(ItemState.Edit)
    }

    function confirm(event: any) {
        props.setItem(temp)
        setState(ItemState.ShowActions)
    }


    return <div className='displayItem'>

        <div className='item'>

            <div>{props.counter}.</div>

            {
                state == ItemState.Edit
                    ? <input className='editInput' type="text" onChange={getValue} value={temp}></input>
                    : <div className='nameItem'>{props.item}</div>
            }

        </div>

        <div className='buttons'>
            <div className='actionsButtons'>
                {
                    state === ItemState.ShowActions && <>
                        <button className='edit' onClick={edit}>Edit</button>
                        <button className='delete' onClick={props.deleleItem}>Delete</button>
                    </>
                }
            </div>

            <div className='editButtons'>
                {
                    state === ItemState.Edit && <>
                        <button className='confirm' onClick={confirm}>Confirm</button>
                        <button className='cancel'>Cancel</button>
                    </>
                }
            </div>

        </div>



    </div>

}