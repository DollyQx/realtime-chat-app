import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);

    const bubbleBgColor = fromMe ? "bg-[#005c4b]" : "bg-[#202c33]";
    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className={`flex w-full mb-1 ${fromMe ? "justify-end" : "justify-start"}`}>
            <div
                className={`max-w-[80%] px-2.5 py-1 rounded-lg shadow-sm relative ${bubbleBgColor} ${shakeClass} text-[#e9edef]`}
            >
                <p className="text-[14.5px] leading-relaxed break-words">{message.message}</p>
                <div className="flex justify-end -mt-1 ml-4 h-4 items-center">
                    <span className="text-[10px] text-[#8696a0] uppercase">
                        {formattedTime}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Message;
