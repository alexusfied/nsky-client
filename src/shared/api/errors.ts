import axios from "axios";

export type ApiErrorKind = "network" | "server" | "timeout" | "client" | "unknown";

export class ApiError extends Error {
    constructor(
        public kind: ApiErrorKind,
        public status?: number,
        public serverMessage?: string,
    ) {
        super(kind);
        this.name = "ApiError";
    }
}

export function toApiError(err: unknown): ApiError {
    if (axios.isAxiosError(err)) {
        if (err.response) {
            const { status, data } = err.response;
            return new ApiError(
                status >= 500 ? "server" : "client",
                status,
                typeof data?.message === "string" ? data.message : undefined
            )
        }

        return new ApiError("network");
    }

    return new ApiError("unknown");
}

