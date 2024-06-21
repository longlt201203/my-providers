import { Injectable } from "@nestjs/common";
import { AuthParams, GetTokensParams, GetTokensResponse } from "./dto";
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom } from "rxjs";
import { AxiosError } from "axios";
import { GetTokensFailedError } from "@providers/google/modules/oauth2/errors";

@Injectable()
export class GoogleOauth2Service {
    private readonly ENDPOINT_AUTH = "https://accounts.google.com/o/oauth2/v2/auth";
    private readonly ENDPOINT_TOKEN = "https://oauth2.googleapis.com/token";

    constructor(
        private readonly httpService: HttpService
    ) {}

    getAuthUri(params: AuthParams) {
        const uri = new URL(this.ENDPOINT_AUTH);
        for (const key of Object.keys(params)) {
            if (params[key]) {
                uri.searchParams.set(key, params[key]);
            }
        }
        return uri.toString();
    }

    async getTokens(params: GetTokensParams) {
        const uri = new URL(this.ENDPOINT_TOKEN);
        const response = await firstValueFrom(
            this.httpService.post<GetTokensResponse>(uri.toString(), params).pipe(
                catchError((err: AxiosError) => {
                    throw new GetTokensFailedError(err.response.data);
                })
            )
        );
        return response.data;
    }
}