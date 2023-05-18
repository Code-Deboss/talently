import React from 'react'

const Button = ({buttonColor, buttonText, buttonRadius, buttonTextColor, borderStyle}) => {
  return (
    <>
      <button className={`${buttonRadius} ${borderStyle} py-3 px-8 ${buttonTextColor} ${buttonColor}`}>
        {buttonText}
      </button>
    </>
  )
}

export default Button