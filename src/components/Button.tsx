import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    label: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-white font-bold bg-blue-500 rounded-md shadow-md focus:outline-none ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 active:bg-blue-700'
                } ${className}`}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
