import Markdown from "react-markdown";

function Message({content, type}: {content: string, type: string}) {
    const userTypeStyles = "justify-end";
    const llmTypeStyles = "";
    const userStyleTextColor = "p-4 rounded-md bg-primary";

    return (
        <div className={`${type === "user" ? userTypeStyles : llmTypeStyles} flex w-full`}>
            <div className={`${type === "user" ? userStyleTextColor : ""} text-white`}>
                <Markdown>{content}</Markdown>
            </div>
        </div>
    );
}

export default Message;
