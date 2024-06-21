import { ApiError } from "@errors";

export class GetTokensFailedError extends ApiError {
    constructor(error: any) {
        super({
            code: "google_oauth2_get_tokens_failed_err",
            message: "Failed to get tokens from Google!",
            detail: error
        });
    }
}