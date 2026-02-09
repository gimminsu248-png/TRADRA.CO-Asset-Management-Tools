import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    helperText?: string;
    className?: string;
}

export const Input = ({ label, helperText, className = '', ...props }: InputProps) => {
    return (
        <div className={`input-field ${className}`}>
            <label className="input-label">{label}</label>
            <input className="input-control" {...props} />
            {helperText && <p className="helper-text">{helperText}</p>}
        </div>
    );
};
