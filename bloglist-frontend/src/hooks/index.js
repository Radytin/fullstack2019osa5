import { useState } from 'react'

export const useField = (type) => { 
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }


  return {
    type,
    value,
    onChange,
    resetName
  }
}

export const resetFiel = (type) => { 
    const [value, setValue] = useState('')
  
    const onChange = (event) => {
      setValue("")
    }
  
  
    return {
      type,
      value,
      onChange,
      resetName
    }
  }

export const useAnotherHook = () => { 
  
}