import React from 'react';

type ButtonType = {
   name: string
   className: string
   disabled?: boolean
   onClick: () => void
}
export const Button:React.FC<ButtonType> = ({name, className, onClick, disabled}) => {

   return (
      <button className={className} onClick={onClick} disabled={disabled}>{name}</button>
   );
};