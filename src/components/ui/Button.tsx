import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
    className?: string;
}

export const Button = ({ variant = 'primary', className = '', ...props }: ButtonProps) => {
    return (
        <button className={`btn-${variant} ${className}`} {...props} />
    );
};
