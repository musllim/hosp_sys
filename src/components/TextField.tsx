import React, { ChangeEvent } from 'react';

interface TextFieldProps {
    label?: string;
    id: string;
    placeholder?: string;
    value?: string;
    type?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({ label, id, placeholder, value, type, onChange }) => (
    <div>
        {label &&
            <label htmlFor={id} className="block dark:text-gray-300 text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>}
        {type === 'textarea' ? <textarea id={id}
            className="block w-full px-4 py-2 text-gray-700 dark:bg-gray-700 dark:text-white bg-white border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-300 focus:outline-none"
            placeholder={placeholder}
            value={value}></textarea> :
            <input
                type="text"
                id={id}
                className="block w-full px-4 py-2 text-gray-700 dark:bg-gray-700 dark:text-white bg-white border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-300 focus:outline-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        }
    </div>
);

export default TextField;
