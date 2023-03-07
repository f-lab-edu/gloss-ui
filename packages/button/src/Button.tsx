import React, { ReactComponentElement, ReactNode } from 'react';

interface Props {
  children: ReactNode
  onClick: () => void
}

const Button = (props: Props) => {
 return (
  <button {...props} style={{border: '3px solid purple'}} />
 )  
}

export default Button