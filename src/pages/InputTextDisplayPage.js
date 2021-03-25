import InputTextProvider from '../contexts/inputText/InputTextProvider'
import TextInput from '../components/TextInput'
import TextDisplay from '../components/TextDisplay'

export default function InputTextDisplayPage() {
  return <>
    <InputTextProvider>
      <TextInput />
      <TextDisplay />
    </InputTextProvider>
  </>
}
