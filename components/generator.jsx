import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const getCharacters = (options) => {
  let characters = ''
  if (options.uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (options.lowercase) characters += 'abcdefghijklmnopqrstuvwxyz'
  if (options.numbers) characters += '0123456789'
  if (options.symbols) characters += '!@#$%^&*()_+'
  return characters
}

export default function Generator () {
  const [state, setState] = useState({
    password: '',
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  })

  const { password, length, uppercase, lowercase, numbers, symbols } = state

  const handleLengthChange = (e) => {
    setState({ ...state, length: e.target.value })
  }

  const handleCheckboxChange = (prop) => {
    setState({ ...state, [prop]: !state[prop] })
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        toast.success('Password copied!', {
          toastClassName: 'font-sans'
        })
      })
      .catch((error) => {
        toast.error('Failed to copy password!', {
          toastClassName: 'font-sans'
        })
        console.error(error)
      })
  }

  const generatePassword = () => {
    const options = { uppercase, lowercase, numbers, symbols }
    const selectedOptions = Object.entries(options).filter(([_, value]) => value)

    if (selectedOptions.length === 0) {
      setState({ ...state, password: '' })
      toast.error('Please select at least one option', {
        toastClassName: 'font-sans'
      })
      return
    }

    const characters = getCharacters(options)
    let password = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      password += characters[randomIndex]
    }

    setState({ ...state, password })
  }

  return (
    <>
      <div className="w-full md:max-w-[500px] flex flex-col gap-4 px-4">
        <div className="flex items-center">
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            placeholder="Your password will appear here"
            className="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-neutral-300 text-neutral-900 placeholder:text-neutral-400 sm:text-sm sm:leading-6 outline-none px-3.5 py-2"
            readOnly
          />
          <button
            onClick={handleCopyClick}
            className="rounded-md bg-blue-600 hover:bg-blue-500 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline outline-2 outline-offset-2 outline-blue-600 ml-2 px-3.5 py-2.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
              <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
            </svg>
          </button>
        </div>
        <div className="">
          <label htmlFor="length" className="">Password length: {length}</label>
          <input
            type="range"
            name="length"
            id="length"
            min={8}
            max={24}
            value={length}
            onChange={handleLengthChange}
            className="range-input"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="uppercase" className="mr-3">Uppercase letters</label>
          <input
            type="checkbox"
            name="uppercase"
            id="uppercase"
            checked={uppercase}
            onChange={() => handleCheckboxChange('uppercase')}
            className="border-neutral-400 rounded text-blue-600 focus:ring-blue-500 mt-0.5"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="lowercase" className="mr-3">Lowercase letters</label>
          <input
            type="checkbox"
            name="lowercase"
            id="lowercase"
            checked={lowercase}
            onChange={() => handleCheckboxChange('lowercase')}
            className="border-neutral-400 rounded text-blue-600 focus:ring-blue-500 mt-0.5"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="numbers" className="mr-3">Numbers</label>
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            checked={numbers}
            onChange={() => handleCheckboxChange('numbers')}
            className="border-neutral-400 rounded text-blue-600 focus:ring-blue-500 mt-0.5"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="symbols" className="mr-3">Symbols</label>
          <input
            type="checkbox"
            name="symbols"
            id="symbols"
            checked={symbols}
            onChange={() => handleCheckboxChange('symbols')}
            className="border-neutral-400 rounded text-blue-600 focus:ring-blue-500 mt-0.5"
          />
        </div>
        <button
          onClick={generatePassword}
          className="block w-full rounded-md bg-blue-600 hover:bg-blue-500 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline outline-2 outline-offset-2 outline-blue-600 px-3.5 py-2.5"
        >Generate</button>
      </div>
      <ToastContainer position="bottom-right" bodyClassName={'font-sans text-sm'} />
    </>
  )
}
