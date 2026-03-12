import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const useChatContext = () => {
    return useContext(ChatContext);
};

export const ChatContextProvider = ({ children }) => {
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState([]);

    return (
        <ChatContext.Provider
            value={{
                selectedConversation,
                setSelectedConversation,
                messages,
                setMessages,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};
