import {create} from "zustand";
import type {IMessagesState} from "@/shared/types/IMessagesState.ts";
import type {IMessage} from "@/shared/types/IMessage.ts";

const useMessageStore = create<IMessagesState>((set) => ({
    messages: [],
    addMessage: (message: IMessage) => { set((state) => ({ messages: [...state.messages, message] })) },
    setMessages: (messages: IMessage[]) => { set((state) => ({ messages: messages })) },
    streamMessage: (chunk: string) => { set((state) => ({ messages: state.messages.map((msg, idx) =>
            idx === state.messages.length - 1? {role: msg.role, content: msg.content + chunk} : msg
        ) })) }
}));

export default useMessageStore;