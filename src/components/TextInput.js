import { useContext } from 'react'
import InputTextContext from '../contexts/inputText/InputTextContext'

export default function TextInput() {
  const { setInputText } = useContext(InputTextContext)

  function handleInputTextChange(event) {
    setInputText(event.target.value);
  }

  return <>
    <div>
      <input type="text" onChange={handleInputTextChange} />
    </div>
  </>
}
