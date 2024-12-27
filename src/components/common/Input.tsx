import React from 'react';

type Props = {
    className?: string;
    placeholder?: string;
}
const Input:React.FC<Props> = ({className,placeholder}) =>  {
    return (
        <input placeholder={placeholder} className={className}/>
    );
}

export default Input;