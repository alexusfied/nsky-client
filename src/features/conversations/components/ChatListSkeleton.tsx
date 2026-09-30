import { Skeleton, Stack } from "@mui/material";

function ChatListSkeleton() {
    return (
        <Stack spacing={2}>
            { [...Array(10)].map(() => <Skeleton />) }
        </Stack>
    );
}

export default ChatListSkeleton;
