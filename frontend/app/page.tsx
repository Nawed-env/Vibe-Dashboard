'use client'

import { useState, useEffect } from 'react'
import ItemCard from '@/components/ItemCard'
import SearchBar from '@/components/SearchBar'

interface Item {
  id: number
  title: string
  description: string
  category: string
  imageUrl: string
  rating: number
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (searchQuery) {  // ← Sirf jab search kare tabhi fetch karo
      fetchItems(searchQuery)
    } else {
      setItems([])  // ← Empty search = no items
      setLoading(false)
    }
  }, [searchQuery])

  const fetchItems = async (query: string) => {
    setLoading(true)
    try {
      const url = query 
        ? `http://localhost:3131/api/items?search=${encodeURIComponent(query)}`
        : 'http://localhost:3131/api/items'
      
      const response = await fetch(url)
      const data = await response.json()
      setItems(data)
    } catch (error) {
      console.error('Error fetching items:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Vibe Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Discover amazing workspaces and creative environments
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
          </div>
        )}

        {/* Items Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-slide-up">            {items.length > 0 ? (
              items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500 text-xl">No items found. Try a different search!</p>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-500">
          <p className="text-sm">Built with ❤️ for Ravulapati Techub PVT LTD</p>
        </footer>
      </div>
    </main>
  )
}