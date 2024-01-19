import React, { useState } from 'react';

function Receiver() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'Receiver' }]);
      setMessage('');
    }
  };

  return (
    <div className="receiver">
      <h2>Receiver</h2>
      <div className="message-container">
        {messages.map((msg, index) => (
          <div key={index} className="message receiver-message">
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Receiver;