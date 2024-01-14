import { profile_img } from "../Constants";

function ChatMessage({name,text})
{
    return(
        <div className="">
            <div className="flex items-center mt-4 mr-4">
                <img className="h-4 mr-1" src={profile_img} />
                <h1 className="mr-2 font-bold">{name}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ChatMessage;