import React, { useState } from "react";
import avatar from '../../assets/users.jpg'; 

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { message: "Hello!", user: { id: 1 } },
    { message: "How Can I help you?", user: { id: 2 } },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { message: inputMessage, user: { id: 1 } }]);
      setInputMessage("");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const fileUrl = URL.createObjectURL(file);
      const fileType = file.type.split("/")[0]; // Check if it's an image
      setMessages([...messages, { file: fileUrl, type: fileType, user: { id: 1 } }]);
      setPreviewUrl("");
    }
  };

  return (
    <div className="h-full w-full flex flex-col">
      {messages?.length > 0 && (
        <div className="flex items-center p-4 border-b border-gray-300">
          <img className="w-12 h-12 rounded-full mr-4" src={avatar} alt="Contact Avatar" />
          <div>
            <h2 className="text-md md:text-lg">Alice Johnson</h2>
            <p className="text-gray-600">alice@example.com</p>
          </div>
        </div>
      )}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="chat-section">
          {messages.length > 0 ? (
            messages.map(({ message: msg, file, type }, index) => (
              <div key={index} className="chat-message-sent mb-4 ml-4 mr-4">
                {msg && <p className="bg-gray-200 p-4 rounded-lg">{msg}</p>}
                {file && type === "image" && (
                  <img src={file} alt="Uploaded" className="w-40 h-40 rounded-lg mt-2" />
                )}
                {file && type !== "image" && (
                  <a href={file} download className="text-blue-500 mt-2 underline">
                    Download File
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-lg font-bold italic">No messages</p>
          )}
        </div>
      </div>
      <div className="flex items-center p-4 border-t border-gray-300">
        <input 
          className="flex-1 px-4 py-2 border rounded-lg" 
          type="text" 
          placeholder="Type a message..." 
          value={inputMessage} 
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <label htmlFor="file-upload" className="ml-4 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="37" height="37" viewBox="0 0 50 50">
            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z" />
          </svg>
          <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
        </label>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg ml-4" 
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;

