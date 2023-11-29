"use client"
import {ChangeEvent, FormEvent, useState} from 'react'
import React from 'react'



interface SearchBarProps {
    onSearch: (query: string) => void;
    handleSubmitButtonStyleChange: () => void;
}

const SearchBar = ({onSearch, handleSubmitButtonStyleChange} : SearchBarProps) => {

    const[query, setQuery] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        handleSubmitButtonStyleChange();
        onSearch(query);
    }

    return (
        <form onSubmit={handleSubmit} className='flex 
                                                items-center 
                                                justify-center
                                                w-screen
                                                '>
            <input 
            type="text" 
            className=' mx-4
                        bordeer-gray-300 
                        bg-green-700
                        text-black
                        font-bold
                        rounded-[20px]
                        py-2 
                        px-4 
                        w-200
                        focus:outline-none 
                        focus:border-green-500'
            value={query}
            onChange={handleChange}
            />
            <button type='submit'
                    className='bg-green-700
                                hover:
                                text-black 
                                font-bold 
                                py-2 
                                px-4 
                                ml-4 
                                rounded-[20px]'>
                Search
            </button>
        </form>
    )
}

export default SearchBar