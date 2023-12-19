import React, {ChangeEvent} from 'react';

type InputType = {
   className?: string
   value: number
   onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
export const Input: React.FC<InputType> = ({
                                              className,
                                              value,
                                              onChange}) => {
   return (
      <input type="number"
             className={className}
             value={value}
             onChange={onChange}
      />
   );
};
