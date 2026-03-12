import { useEffect } from "react";
import { useChatContext } from "../../context/ChatContext";
import { MessageSquare, MoreVertical, Phone, Video } from "lucide-react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useChatContext();

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className="flex-1 flex flex-col bg-[#0b141a] relative">
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* Main Header */}
                    <div className="h-16 bg-[#202c33] flex items-center justify-between px-4 py-2 shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={selectedConversation.profilePic} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#e9edef] font-medium leading-tight">{selectedConversation.name}</span>
                                <span className="text-xs text-[#8696a0]">online status here</span>
                            </div>
                        </div>
                        <div className="flex gap-6 text-[#8696a0]">
                            <Video className="w-5 h-5 cursor-pointer" />
                            <Phone className="w-5 h-5 cursor-pointer" />
                            <div className="w-[1px] h-5 bg-[#374151] mx-1"></div>
                            <MoreVertical className="w-5 h-5 cursor-pointer" />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat opacity-90">
                        <Messages />
                    </div>

                    <MessageInput />
                </>
            )}
        </div>
    );
};
export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="flex items-center justify-center w-full h-full bg-[#222e35]">
            <div className="px-4 text-center text-[#8696a0] flex flex-col items-center gap-4 max-w-md">
                <div className="w-56 h-56 bg-[#202c33] rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="w-24 h-24 text-[#222d34]" />
                </div>
                <h1 className="text-3xl text-[#e9edef] font-light">ChatApp Web</h1>
                <p className="text-sm">Send and receive messages without keeping your phone online.<br />Use ChatApp on up to 4 linked devices and 1 phone at the same time.</p>
                <div className="mt-8 text-xs flex items-center gap-1 opacity-50">
                    <span>🔒 End-to-end encrypted</span>
                </div>
            </div>
        </div>
    );
};
