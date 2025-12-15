import React from 'react';

const TextArea = ({ label, error, name, ...props }) => {
    const inputId = props.id || name;

    return (
        <div className="mb-4">
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    {label}
                </label>
            )}
            <textarea
                id={inputId}
                name={name}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] ${error ? "border-red-500" : "border-gray-300"
                    }`}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default TextArea;