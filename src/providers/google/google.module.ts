import { DynamicModule, Module } from "@nestjs/common";
import { GoogleOauth2Module } from "./modules/oauth2";
import { GoogleService } from "./google.service";
import { ModuleInitParams } from "./dto";

@Module({
    imports: [GoogleOauth2Module],
    providers: [GoogleService],
    exports: [GoogleService]
})
export class GoogleModule {
    static register(params: ModuleInitParams): DynamicModule {
        return {
            module: GoogleModule,
            providers: [
                {
                    provide: "INIT_PARAMS",
                    useValue: params
                }
            ]
        }
    }
}