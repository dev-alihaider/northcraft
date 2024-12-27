import React from 'react';

type Props = {
    children?: React.ReactNode; className?: string;
}
const Button: React.FC<Props> = ({children, className}) => {
    return (<div>
        <button className={className}> {children}</button>
    </div>);
}

export default Button;