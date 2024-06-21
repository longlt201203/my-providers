import { Module } from "@nestjs/common";
import { GoogleOauth2Service } from "./google-oauth2.serivce";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    providers: [GoogleOauth2Service],
    exports: [GoogleOauth2Service]
})
export class GoogleOauth2Module {}