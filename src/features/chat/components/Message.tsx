function Message({content, type}: {content: string, type: string}) {
    const userTypeStyles = "justify-end";
    const llmTypeStyles = "text-white";
    const userStyleTextColor = "text-white p-4 rounded-md bg-primary";

    return (
        <div className={`${type === "user" ? userTypeStyles : llmTypeStyles} flex w-full`}>
            <p className={type === "user" ? userStyleTextColor : ""}>{content}</p>
        </div>
    );
}

export default Message;
