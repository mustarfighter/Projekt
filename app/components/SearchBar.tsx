"use client"
import {ChangeEvent, FormEvent, useState} from 'react'

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar = ({onSearch} : SearchBarProps) => {

    const[query, setQuery] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
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
                        bg-blue-500
                        text-black
                        font-bold
                        rounded-lg 
                        py-2 
                        px-4 
                        w-200
                        focus:outline-none 
                        focus:border-blue-500'
            value={query}
            onChange={handleChange}
            />
            <button type='submit'
                    className='bg-blue-500 
                                hover:bg-blue-700 
                                text-black 
                                font-bold 
                                py-2 
                                px-4 
                                ml-4 
                                rounded'>
                Search
            </button>
        </form>
    )
}

export default SearchBar