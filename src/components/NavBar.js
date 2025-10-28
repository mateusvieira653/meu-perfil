import React from "react";

export default function Navbar() {
    return (
        <nav classNAme="flex justify-center gap-6 bg-gray-200 p-4 shadow-md">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#escolaridade" className="hover:text-blue-600">Sobre a Escolaridade</a>
            <a href="#Perfil" className="hover:text-blue-600"> Meu Perfil</a>
        </nav>
    );
}