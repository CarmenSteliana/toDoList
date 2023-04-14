import { useRef, useState } from 'react'
import './App.css'
import ListItem from './components/ListItem'

function App() {


    const [items, setItems] = useState<string[]>([]);
    const myRef = useRef<HTMLInputElement>(null)

    function getValueInput(event: any) {
        let value = event.target.value
    }

    function click() {
        const v = myRef.current?.value

        if (v) {
            setItems(old => ([...old, v]))
        }
        if (myRef.current) {
            myRef.current.value = ""
        }
    }

    const modifyItem = (index: number, newValue: string) => {
        setItems(p => {
            const result = [...p]
            result[index] = newValue
            return result
        })
    }

    const removeItem = (index: number) => {
        setItems([
            ...items.slice(0, index),
            ...items.slice(index + 1)
        ]);

    }

    return <div className='content'>

        <div className='title'>My activities list</div>
        <div className='activity'>
            <input className="input" type="text"
                placeholder='My activity...'
                ref={myRef}
                id="fname"
                name="fname"
                onChange={getValueInput}
            >

            </input>
            <button className='addButton' onClick={click}>+</button>
        </div>
        {items.map((i, index) => (<ListItem
            key={index}
            item={i}
            setItem={(v) => modifyItem(index, v)}
            deleleItem={() => removeItem(index)}
            counter={index + 1}
        />))}
    </div>
}

export default App
