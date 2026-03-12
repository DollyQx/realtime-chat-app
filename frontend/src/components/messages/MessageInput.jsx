import { useState } from "react";
import { Send, Smile, Paperclip } from "lucide-react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    };

    return (
        <div className="bg-[#202c33] px-4 py-2.5 flex items-center gap-4">
            <div className="flex gap-4 text-[#8696a0]">
                <Smile className="w-7 h-7 cursor-pointer hover:text-[#e9edef] p-0.5" />
                <Paperclip className="w-7 h-7 cursor-pointer hover:text-[#e9edef] p-0.5" />
            </div>

            <form className="flex-1" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="w-full bg-[#2a3942] text-[#e9edef] text-sm rounded-lg py-2.5 px-4 outline-none placeholder-[#8696a0]"
                    placeholder="Type a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </form>

            <button onClick={handleSubmit} disabled={loading} className="p-1">
                {loading ? <div className="loading loading-spinner w-6 h-6"></div> : <Send className="w-6 h-6 text-[#8696a0] hover:text-[#e9edef]" />}
            </button>
        </div>
    );
};
export default MessageInput;
