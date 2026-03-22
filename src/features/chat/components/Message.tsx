function Message({content, type}: {content: string, type: string}) {
    const userTypeStyles = "bg-gray-700 p-4 border rounded-md";
    const userStyleTextColor = "text-white";

    return (
        <div className={type === "user" ? userTypeStyles : ""}>
            <p className={type === "user" ? userStyleTextColor : ""}>{content}</p>
        </div>
    );
}

export default Message;
