import MessageInput from "./components/MessageInput";
import Message from "./components/Message";

function Chat() {
    return (
        <section className="flex justify-center h-screen w-2/3 bg-red-100">
            <div className="flex flex-col gap-4 bg-blue-50 w-4/5 h-screen">
                <Message />
                <Message />
            </div>
            <MessageInput />
        </section>
    );
}

export default Chat;
