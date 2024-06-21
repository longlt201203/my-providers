import { Injectable } from '@nestjs/common';
import { GoogleService } from '@providers/google';
import { Env } from '@utils';

@Injectable()
export class AppService {
  private readonly GOOGLE_SCOPE_EMAIL = "https://www.googleapis.com/auth/userinfo.email";
  private readonly GOOGLE_SCOPE_PROFILE = "https://www.googleapis.com/auth/userinfo.profile";
  private readonly GOOGLE_SCOPE_OPENID = "openid";

  constructor(
    private readonly googleService: GoogleService
  ) {}

  getGoogleOauth2Uri() {
    return this.googleService.getOauth2Uri(Env.GOOGLE_REDIRECT_URI, [this.GOOGLE_SCOPE_OPENID]);
  }
  
  getGoogleTokens(code: string) {
    return this.googleService.getOauth2Tokens(code, Env.GOOGLE_REDIRECT_URI);
  }
}
