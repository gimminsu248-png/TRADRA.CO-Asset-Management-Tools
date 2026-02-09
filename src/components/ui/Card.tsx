import React from 'react';

interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ title, children, className = '' }: CardProps) => {
    return (
        <div className={`glass-card ${className}`}>
            {title && <h2 className="card-title">{title}</h2>}
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};
