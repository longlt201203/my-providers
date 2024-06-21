import { Inject, Injectable } from "@nestjs/common";
import { GoogleOauth2Service } from "./modules/oauth2";
import { ModuleInitParams } from "./dto";

@Injectable()
export class GoogleService {
    constructor(
        @Inject("INIT_PARAMS")
        private readonly initParams: ModuleInitParams,
        private readonly googleOauth2Service: GoogleOauth2Service
    ) { }

    getOauth2Uri(redirectUri: string, scopes: string[]) {
        // this.googleOauth2Service.getTokens()
        return this.googleOauth2Service.getAuthUri({
            client_id: this.initParams.clientId,
            redirect_uri: redirectUri,
            response_type: "code",
            scope: scopes.join(" ")
        });
    }

    getOauth2Tokens(code: string, redirectUri: string) {
        return this.googleOauth2Service.getTokens({
            client_id: this.initParams.clientId,
            client_secret: this.initParams.clientSecret,
            code: code,
            grant_type: "authorization_code",
            redirect_uri: redirectUri
        })
    }
}