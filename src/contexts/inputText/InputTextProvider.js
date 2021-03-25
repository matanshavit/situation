import { useState } from 'react'
import InputTextContext from './InputTextContext'

export default function InputTextProvider({ children }) {
  const [inputText, setInputText] = useState('')
  return <InputTextContext.Provider value={{
    inputText, setInputText
  }}>
    { children }
  </InputTextContext.Provider>
}
