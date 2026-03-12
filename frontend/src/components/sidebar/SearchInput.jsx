import { useState } from "react";
import { Search } from "lucide-react";
import { useChatContext } from "../../context/ChatContext";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useChatContext();
    const { conversations } = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        const conversation = conversations.find((c) => c.name.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error("No such user found!");
    };

    return (
        <form onSubmit={handleSubmit} className="relative flex items-center w-full">
            <div className="absolute left-3 text-[#8696a0]">
                <Search className="w-4 h-4" />
            </div>
            <input
                type="text"
                placeholder="Search or start new chat"
                className="w-full bg-[#202c33] text-[#e9edef] text-sm rounded-lg pl-12 pr-4 py-2 outline-none placeholder-[#8696a0]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
};
export default SearchInput;
