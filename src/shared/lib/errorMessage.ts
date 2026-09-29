import type { ApiErrorKind } from "../api/errors";

export const defaultMessages: Record<ApiErrorKind, string> = {
    network: "No network connection. Please check your network and try again",
    server: "Something went wrong. Please try again later",
    client: "Something went wrong. Please try again later",
    timeout: "The request took to long. Please try again.",
    unknown: "Something went wrong"
};
