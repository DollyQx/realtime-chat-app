import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { useAuthContext } from "../../context/AuthContext";

const Sidebar = () => {
    const { authUser } = useAuthContext();

    return (
        <div className="w-1/3 min-w-[300px] border-r border-[#222d34] flex flex-col bg-[#111b21]">
            {/* Sidebar Header */}
            <div className="h-16 bg-[#202c33] flex items-center justify-between px-4 py-2 shrink-0">
                <div className="avatar">
                    <div className="w-10 rounded-full ring ring-[#00a884] ring-offset-base-100 ring-offset-2">
                        <img src={authUser.profilePic} alt="me" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <LogoutButton />
                </div>
            </div>

            <div className="p-3">
                <SearchInput />
            </div>

            <div className="flex-1 overflow-y-auto">
                <Conversations />
            </div>
        </div>
    );
};
export default Sidebar;
