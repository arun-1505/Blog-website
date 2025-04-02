import React from 'react'

function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props

}) {
  return (
    //jo bhi text pass hoga wo button m aa jayega chidren ki jagah text bhi likh sakte the n oproblem

  <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
    {children}
    </button>

  )
}

export default Button
