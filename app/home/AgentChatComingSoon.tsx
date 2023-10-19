import React from 'react'

const AgentChatSoon = () => {
  return (
    <section className="p-8 flex items-center justify-center bg-neutral">
      <div className="p-8 bg-white rounded-2xl shadow-xl w-full max-w-md text-center space-y-5">
        
        <h1 className="text-4xl font-bold text-gray-800">Chat with Agent</h1>
        
        <p className="text-gray-600">
         Coming Soon...
        </p>
        
        <div className="flex justify-center space-x-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <span className="block text-xl font-bold">00</span>
            <span className="block text-sm">Days</span>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <span className="block text-xl font-bold">00</span>
            <span className="block text-sm">Hours</span>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <span className="block text-xl font-bold">00</span>
            <span className="block text-sm">Minutes</span>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <span className="block text-xl font-bold">00</span>
            <span className="block text-sm">Seconds</span>
          </div>
        </div>
        
        <button className="btn btn-outline btn-primary text-primary-content">Notify Me</button>
      </div>
    </section>
  ) 
}

export default AgentChatSoon