import React from "react";


interface MyInputProps {
    type: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MyInput = ({type, onChange, value}:MyInputProps) => {
    return (
        <input
            type={type}
            onChange={onChange}
            value={value}
            className={'py-2 w-full text-xl mb-5 px-6 border-2 rounded-md transition-colors outline-0 border-[#d4e0eb] focus:border-[#1a6ccd]'}
        />
    );
};

export default MyInput;