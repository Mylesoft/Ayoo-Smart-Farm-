import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hi there! I\'m AyooBot, your smart farming assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = { id: messages.length + 1, sender: 'user', text: input.trim() };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = { id: messages.length + 2, sender: 'bot', text: `Thanks for your message: "${newMessage.text}". I'm still learning, but I can help with common questions about smart farming, products, or bookings. How else can I assist?` };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col w-80 h-96 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="h-6 w-6" />
                <h3 className="font-semibold text-lg">AyooBot</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${msg.sender === 'user'
                      ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'}
                    `}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      {msg.sender === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                      <span className="font-semibold text-sm">{msg.sender === 'bot' ? 'AyooBot' : 'You'}</span>
                    </div>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors"
        title="Open Chatbot"
      >
        <MessageSquare className="h-7 w-7" />
      </motion.button>
    </div>
  );
};

export default Chatbot;

