// import React, { useState } from 'react';

// function Chatbox() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleInput = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim() !== '') {
//       // Add the user's message to the chat
//       setMessages([...messages, { text: input, user: true }]);
//       // Simulate the chatbot's response (you'd replace this with actual logic)
//       simulateResponse(input);
//       setInput('');
//     }
//   };

//   const simulateResponse = (userMessage) => {
//     // Simulate a response from the chatbot (replace with actual logic)
//     const botMessage = { text: `You said: ${userMessage}`, user: false };
//     setMessages([...messages, botMessage]);
//   };

//   return (
//     <div className="chatbot">
//       <div className="chatbot-messages">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`message ${message.user ? 'user' : 'bot'}`}
//           >
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={input}
//           onChange={handleInput}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default Chatbox;














import React, { useState } from 'react';

function Sender() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'You' }]);
      setMessage('');
    }
  };

  return (
    <div className="sender">
      <h2>You</h2>
      <div className="message-container">
        {messages.map((msg, index) => (
          <div key={index} className="message sender-message">
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

export default Sender;