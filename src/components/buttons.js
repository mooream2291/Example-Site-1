import React from 'react';
import './Buttons.css';

const Styles = [
  'btn-primary',
  'btn-outline'
]

const Sizes = [
  'btn-medium',
  'btn-large'
]

export const Buttons = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

  const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0]
  
  const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0]

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}>
      {children}
    </button>
  )
}
