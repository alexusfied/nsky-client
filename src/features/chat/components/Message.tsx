function Message({content, type}: {content: string, type: string}) {
    const userTypeStyles = "justify-end";
    const llmTypeStyles = "";
    const userStyleTextColor = "p-4 rounded-md bg-primary";

    return (
        <div className={`${type === "user" ? userTypeStyles : llmTypeStyles} flex w-full`}>
            <p className={`${type === "user" ? userStyleTextColor : ""} text-white`}>{content}</p>
        </div>
    );
}

export default Message;
