import { useContext } from 'react'
import InputTextContext from '../contexts/inputText/InputTextContext'

export default function TextDisplay() {
  const { inputText } = useContext(InputTextContext)
  return <>
    <h3>you entered:</h3>
    <h1>{inputText}</h1>
  </>
}
