import React from 'react'

const Button = ({buttonClass, buttonText}) => {
  return (
    <>
      <button className={buttonClass}>
        {buttonText}
      </button>
    </>
  )
}

export default Button