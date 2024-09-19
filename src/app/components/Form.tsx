import React, { useState } from 'react'

interface FormProps {
  addUser: (name: string, contact: string) => void; // Function to add the user to the table
}

export default function Form({ addUser }: FormProps) {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Call the addUser function passed as a prop to add a new user
    addUser(name, contact)

    // Clear the form fields
    setName('')
    setContact('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="contact">Contact</label>
        <input
          id="contact"
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  )
}
