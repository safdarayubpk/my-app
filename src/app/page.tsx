"use client"
import React, { useState } from 'react'
import Form from './components/Form'

interface User {
  id: number;
  name: string;
  contact: string;
}

export default function Page() {
  const [userData, setUserData] = useState<User[]>([])

  // Function to add a user to the table
  const addUser = (name: string, contact: string) => {
    const newUser: User = {
      id: userData.length + 1, // Generate a simple id
      name: name,
      contact: contact
    }

    // Add the new user to the state
    setUserData([...userData, newUser])
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>

      {/* Import and render the Form component */}
      <Form addUser={addUser} />

      {/* User Data Table */}
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Contact</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id} className="border-t border-gray-200">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
