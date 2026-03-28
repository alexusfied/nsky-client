import {useEffect, useState} from "react";
import {api} from "@/shared/api/axiosInstance.ts";
import type {MessageResponseDTO} from "@/shared/types/MessageResponseDTO.ts";
import type {AxiosError} from "axios";
import useChatStore from "@/shared/store/chatStore.ts";
import useMessageStore from "@/shared/store/messageStore.ts";

export function useLoadMessagesForChat() {
    const [isLoadingMessages, setIsLoadingMessages] = useState(false);
    const [errorLoadingMessages, setErrorLoadingMessages] = useState<string | null>(null);
    const messages = useMessageStore((state) => state.messages);
    const setMessages = useMessageStore((state) => state.setMessages);
    const selectedChatId = useChatStore((state) => state.selectedChat);

    const loadMessagesForChat = async (chatId: number) => {
        setIsLoadingMessages(true);
        setErrorLoadingMessages(null);

        try {
            const response = await api.get(`/chats/${chatId}/messages`);
            setMessages(response.data.map((messageResponse: MessageResponseDTO) => {
                return {
                    role: messageResponse.author,
                    content: messageResponse.content
                };
            }));
        } catch (error) {
            const err = error as Error | AxiosError;
            setErrorLoadingMessages(err.message);
        }
    }

    useEffect(() => {
        if (selectedChatId != null) {
            loadMessagesForChat(selectedChatId);
        } else {
            setMessages([]);
        }

    }, [selectedChatId]);

    return {isLoadingMessages, errorLoadingMessages, messages}
}