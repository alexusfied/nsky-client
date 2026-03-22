function Message({content, type}: {content: string, type: string}) {
    const userTypeStyles = "justify-end";
    const llmTypeStyles = "";
    const userStyleTextColor = "text-white bg-gray-700 p-4 border rounded-md";

    return (
        <div className={`${type === "user" ? userTypeStyles : llmTypeStyles} flex w-full`}>
            <p className={type === "user" ? userStyleTextColor : ""}>{content}</p>
        </div>
    );
}

export default Message;
