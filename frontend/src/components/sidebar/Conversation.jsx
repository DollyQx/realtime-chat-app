import { useChatContext } from "../../context/ChatContext";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useChatContext();

    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <div
            className={`flex gap-3 items-center px-4 py-3 cursor-pointer transition-colors duration-200
        ${isSelected ? "bg-[#2a3942]" : "hover:bg-[#202c33]"}
      `}
            onClick={() => setSelectedConversation(conversation)}
        >
            <div className={`avatar ${isOnline ? "online" : "offline"}`}>
                <div className="w-12 h-12 rounded-full">
                    <img src={conversation.profilePic} alt="user avatar" />
                </div>
            </div>

            <div className="flex flex-col flex-1 border-b border-[#222d34] pb-3 last:border-0 h-full justify-center">
                <div className="flex justify-between items-center">
                    <p className="font-medium text-[#e9edef]">{conversation.name}</p>
                    {isOnline && (
                        <span className="w-2 h-2 bg-[#00a884] rounded-full"></span>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Conversation;
