'use client'

import { useState, useEffect } from 'react'

interface SearchBarProps {
    onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [query, setQuery] = useState('')

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(query)
        }, 300)

        return () => clearTimeout(timer)
    }, [query, onSearch])

    return (
        <div className="max-w-2xl mx-auto mb-12">
            <div className="glass rounded-2xl p-2 flex items-center gap-3 transform transition-all duration-300 focus-within:scale-105 focus-within:shadow-2xl">
                {/* Search Icon */}
                <svg
                    className="w-6 h-6 text-purple-600 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Search for workspaces, technology, design..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 py-3 text-lg"
                />

                {/* Clear Button */}
                {query && (
                    <button
                        onClick={() => setQuery('')}
                        className="mr-2 p-2 hover:bg-gray-200/50 rounded-full transition-colors"
                    >
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Search Stats */}
            {query && (
                <p className="text-center mt-3 text-sm text-gray-500 animate-fade-in">
                    Searching for &quot;{query}&quot;...
                </p>
            )}
        </div>
    )
}