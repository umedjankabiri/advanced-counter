import React from 'react';
type DisplayType = {
   title: string | number
   className: string
   error: string | null
}
export const Display: React.FC<DisplayType> = ({title, className, error}) => {
   return (
      <h1 className={className}>
         {title}
      </h1>
   );
}
