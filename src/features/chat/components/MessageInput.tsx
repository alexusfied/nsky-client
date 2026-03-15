function MessageInput() {
    return (
        <div className="flex flex-row w-full justify-center relative top-[90vh] gap-3">
            <input type="text" className="bg-white rounded-md w-3/4 accent-black p-2"/>
            <button type="button" className="outline-solid hover:bg-black hover:text-white cursor-pointer border-black rounded-md p-1">Send</button>
        </div>
    );
}

export default MessageInput;
