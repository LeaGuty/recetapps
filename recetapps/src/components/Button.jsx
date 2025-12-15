import React from 'react';

const Button = ({ children, onClick, type = "button", variant = "primary", className = "" }) => {
    // Definimos estilos base que todos los botones tendrán
    const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    // Definimos variantes de color
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;