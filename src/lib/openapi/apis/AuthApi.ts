/* tslint:disable */
/* eslint-disable */
/**
 * Todo List API
 * A basic todo list API.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AuthToken,
  DrfAuthtoken,
  GCMDeviceRequest,
  Login,
  LoginRequest,
  PasswordChangeRequest,
  PasswordResetConfirmRequest,
  PasswordResetRequest,
  PatchedUserDetailsRequest,
  RegisterRequest,
  ResendEmailVerificationRequest,
  RestAuthDetail,
  Token,
  UserDetails,
  UserDetailsRequest,
  VerifyEmailRequest,
} from '../models';
import {
    AuthTokenFromJSON,
    AuthTokenToJSON,
    DrfAuthtokenFromJSON,
    DrfAuthtokenToJSON,
    GCMDeviceRequestFromJSON,
    GCMDeviceRequestToJSON,
    LoginFromJSON,
    LoginToJSON,
    LoginRequestFromJSON,
    LoginRequestToJSON,
    PasswordChangeRequestFromJSON,
    PasswordChangeRequestToJSON,
    PasswordResetConfirmRequestFromJSON,
    PasswordResetConfirmRequestToJSON,
    PasswordResetRequestFromJSON,
    PasswordResetRequestToJSON,
    PatchedUserDetailsRequestFromJSON,
    PatchedUserDetailsRequestToJSON,
    RegisterRequestFromJSON,
    RegisterRequestToJSON,
    ResendEmailVerificationRequestFromJSON,
    ResendEmailVerificationRequestToJSON,
    RestAuthDetailFromJSON,
    RestAuthDetailToJSON,
    TokenFromJSON,
    TokenToJSON,
    UserDetailsFromJSON,
    UserDetailsToJSON,
    UserDetailsRequestFromJSON,
    UserDetailsRequestToJSON,
    VerifyEmailRequestFromJSON,
    VerifyEmailRequestToJSON,
} from '../models';

export interface AuthFcmCreateRequest {
    gCMDeviceRequest: GCMDeviceRequest;
}

export interface AuthFcmUpdateRequest {
    gCMDeviceRequest: GCMDeviceRequest;
}

export interface AuthLoginCreateRequest {
    loginRequest: LoginRequest;
}

export interface AuthLoginTokenCreateRequest {
    username: string;
    password: string;
}

export interface AuthPasswordChangeCreateRequest {
    passwordChangeRequest: PasswordChangeRequest;
}

export interface AuthPasswordResetConfirmCreateRequest {
    passwordResetConfirmRequest: PasswordResetConfirmRequest;
}

export interface AuthPasswordResetCreateRequest {
    passwordResetRequest: PasswordResetRequest;
}

export interface AuthRegistrationCreateRequest {
    registerRequest: RegisterRequest;
}

export interface AuthRegistrationResendEmailCreateRequest {
    resendEmailVerificationRequest?: ResendEmailVerificationRequest;
}

export interface AuthRegistrationVerifyEmailCreateRequest {
    verifyEmailRequest: VerifyEmailRequest;
}

export interface AuthUserPartialUpdateRequest {
    patchedUserDetailsRequest?: PatchedUserDetailsRequest;
}

export interface AuthUserUpdateRequest {
    userDetailsRequest: UserDetailsRequest;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     * Check if a user is authenticated using session authentication.
     */
    async authCheckRetrieveRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DrfAuthtoken>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/auth/check/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DrfAuthtokenFromJSON(jsonValue));
    }

    /**
     * Check if a user is authenticated using session authentication.
     */
    async authCheckRetrieve(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DrfAuthtoken> {
        const response = await this.authCheckRetrieveRaw(initOverrides);
        return await response.value();
    }

    /**
     * Check if a user is authenticated using token authentication.
     */
    async authCheckTokenRetrieveRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DrfAuthtoken>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/api/auth/check/token/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DrfAuthtokenFromJSON(jsonValue));
    }

    /**
     * Check if a user is authenticated using token authentication.
     */
    async authCheckTokenRetrieve(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DrfAuthtoken> {
        const response = await this.authCheckTokenRetrieveRaw(initOverrides);
        return await response.value();
    }

    /**
     * Register a device with Firebase Cloud Messaging (FCM).
     */
    async authFcmCreateRaw(requestParameters: AuthFcmCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.gCMDeviceRequest === null || requestParameters.gCMDeviceRequest === undefined) {
            throw new runtime.RequiredError('gCMDeviceRequest','Required parameter requestParameters.gCMDeviceRequest was null or undefined when calling authFcmCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/api/auth/fcm/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GCMDeviceRequestToJSON(requestParameters.gCMDeviceRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Register a device with Firebase Cloud Messaging (FCM).
     */
    async authFcmCreate(requestParameters: AuthFcmCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.authFcmCreateRaw(requestParameters, initOverrides);
    }

    /**
     * Register a device with Firebase Cloud Messaging (FCM).
     */
    async authFcmUpdateRaw(requestParameters: AuthFcmUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.gCMDeviceRequest === null || requestParameters.gCMDeviceRequest === undefined) {
            throw new runtime.RequiredError('gCMDeviceRequest','Required parameter requestParameters.gCMDeviceRequest was null or undefined when calling authFcmUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/api/auth/fcm/`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: GCMDeviceRequestToJSON(requestParameters.gCMDeviceRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Register a device with Firebase Cloud Messaging (FCM).
     */
    async authFcmUpdate(requestParameters: AuthFcmUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.authFcmUpdateRaw(requestParameters, initOverrides);
    }

    /**
     * Login using session authentication.
     */
    async authLoginCreateRaw(requestParameters: AuthLoginCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Login>> {
        if (requestParameters.loginRequest === null || requestParameters.loginRequest === undefined) {
            throw new runtime.RequiredError('loginRequest','Required parameter requestParameters.loginRequest was null or undefined when calling authLoginCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/auth/login/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginRequestToJSON(requestParameters.loginRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginFromJSON(jsonValue));
    }

    /**
     * Login using session authentication.
     */
    async authLoginCreate(requestParameters: AuthLoginCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Login> {
        const response = await this.authLoginCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Login using token authentication.
     */
    async authLoginTokenCreateRaw(requestParameters: AuthLoginTokenCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthToken>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling authLoginTokenCreate.');
        }

        if (requestParameters.password === null || requestParameters.password === undefined) {
            throw new runtime.RequiredError('password','Required parameter requestParameters.password was null or undefined when calling authLoginTokenCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
            { contentType: 'multipart/form-data' },
            { contentType: 'application/json' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.username !== undefined) {
            formParams.append('username', requestParameters.username as any);
        }

        if (requestParameters.password !== undefined) {
            formParams.append('password', requestParameters.password as any);
        }

        const response = await this.request({
            path: `/api/auth/login/token/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthTokenFromJSON(jsonValue));
    }

    /**
     * Login using token authentication.
     */
    async authLoginTokenCreate(requestParameters: AuthLoginTokenCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthToken> {
        const response = await this.authLoginTokenCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Calls Django logout method and delete the Token object assigned to the current User object.  Accepts/Returns nothing.
     */
    async authLogoutCreateRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestAuthDetail>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/api/auth/logout/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RestAuthDetailFromJSON(jsonValue));
    }

    /**
     * Calls Django logout method and delete the Token object assigned to the current User object.  Accepts/Returns nothing.
     */
    async authLogoutCreate(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestAuthDetail> {
        const response = await this.authLogoutCreateRaw(initOverrides);
        return await response.value();
    }

    /**
     * Calls Django Auth SetPasswordForm save method.  Accepts the following POST parameters: new_password1, new_password2 Returns the success/fail message.
     */
    async authPasswordChangeCreateRaw(requestParameters: AuthPasswordChangeCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestAuthDetail>> {
        if (requestParameters.passwordChangeRequest === null || requestParameters.passwordChangeRequest === undefined) {
            throw new runtime.RequiredError('passwordChangeRequest','Required parameter requestParameters.passwordChangeRequest was null or undefined when calling authPasswordChangeCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/api/auth/password/change/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PasswordChangeRequestToJSON(requestParameters.passwordChangeRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RestAuthDetailFromJSON(jsonValue));
    }

    /**
     * Calls Django Auth SetPasswordForm save method.  Accepts the following POST parameters: new_password1, new_password2 Returns the success/fail message.
     */
    async authPasswordChangeCreate(requestParameters: AuthPasswordChangeCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestAuthDetail> {
        const response = await this.authPasswordChangeCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Password reset e-mail link is confirmed, therefore this resets the user\'s password.  Accepts the following POST parameters: token, uid,     new_password1, new_password2 Returns the success/fail message.
     */
    async authPasswordResetConfirmCreateRaw(requestParameters: AuthPasswordResetConfirmCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestAuthDetail>> {
        if (requestParameters.passwordResetConfirmRequest === null || requestParameters.passwordResetConfirmRequest === undefined) {
            throw new runtime.RequiredError('passwordResetConfirmRequest','Required parameter requestParameters.passwordResetConfirmRequest was null or undefined when calling authPasswordResetConfirmCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/api/auth/password/reset/confirm/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PasswordResetConfirmRequestToJSON(requestParameters.passwordResetConfirmRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RestAuthDetailFromJSON(jsonValue));
    }

    /**
     * Password reset e-mail link is confirmed, therefore this resets the user\'s password.  Accepts the following POST parameters: token, uid,     new_password1, new_password2 Returns the success/fail message.
     */
    async authPasswordResetConfirmCreate(requestParameters: AuthPasswordResetConfirmCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestAuthDetail> {
        const response = await this.authPasswordResetConfirmCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Calls Django Auth PasswordResetForm save method.  Accepts the following POST parameters: email Returns the success/fail message.
     */
    async authPasswordResetCreateRaw(requestParameters: AuthPasswordResetCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestAuthDetail>> {
        if (requestParameters.passwordResetRequest === null || requestParameters.passwordResetRequest === undefined) {
            throw new runtime.RequiredError('passwordResetRequest','Required parameter requestParameters.passwordResetRequest was null or undefined when calling authPasswordResetCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/api/auth/password/reset/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PasswordResetRequestToJSON(requestParameters.passwordResetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RestAuthDetailFromJSON(jsonValue));
    }

    /**
     * Calls Django Auth PasswordResetForm save method.  Accepts the following POST parameters: email Returns the success/fail message.
     */
    async authPasswordResetCreate(requestParameters: AuthPasswordResetCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestAuthDetail> {
        const response = await this.authPasswordResetCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async authRegistrationCreateRaw(requestParameters: AuthRegistrationCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters.registerRequest === null || requestParameters.registerRequest === undefined) {
            throw new runtime.RequiredError('registerRequest','Required parameter requestParameters.registerRequest was null or undefined when calling authRegistrationCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/api/auth/registration/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegisterRequestToJSON(requestParameters.registerRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     */
    async authRegistrationCreate(requestParameters: AuthRegistrationCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Token> {
        const response = await this.authRegistrationCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async authRegistrationResendEmailCreateRaw(requestParameters: AuthRegistrationResendEmailCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestAuthDetail>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/api/auth/registration/resend-email/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ResendEmailVerificationRequestToJSON(requestParameters.resendEmailVerificationRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RestAuthDetailFromJSON(jsonValue));
    }

    /**
     */
    async authRegistrationResendEmailCreate(requestParameters: AuthRegistrationResendEmailCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestAuthDetail> {
        const response = await this.authRegistrationResendEmailCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async authRegistrationVerifyEmailCreateRaw(requestParameters: AuthRegistrationVerifyEmailCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestAuthDetail>> {
        if (requestParameters.verifyEmailRequest === null || requestParameters.verifyEmailRequest === undefined) {
            throw new runtime.RequiredError('verifyEmailRequest','Required parameter requestParameters.verifyEmailRequest was null or undefined when calling authRegistrationVerifyEmailCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/api/auth/registration/verify-email/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VerifyEmailRequestToJSON(requestParameters.verifyEmailRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RestAuthDetailFromJSON(jsonValue));
    }

    /**
     */
    async authRegistrationVerifyEmailCreate(requestParameters: AuthRegistrationVerifyEmailCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestAuthDetail> {
        const response = await this.authRegistrationVerifyEmailCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.  Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     */
    async authUserPartialUpdateRaw(requestParameters: AuthUserPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDetails>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/api/auth/user/`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedUserDetailsRequestToJSON(requestParameters.patchedUserDetailsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDetailsFromJSON(jsonValue));
    }

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.  Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     */
    async authUserPartialUpdate(requestParameters: AuthUserPartialUpdateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDetails> {
        const response = await this.authUserPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.  Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     */
    async authUserRetrieveRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDetails>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/api/auth/user/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDetailsFromJSON(jsonValue));
    }

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.  Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     */
    async authUserRetrieve(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDetails> {
        const response = await this.authUserRetrieveRaw(initOverrides);
        return await response.value();
    }

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.  Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     */
    async authUserUpdateRaw(requestParameters: AuthUserUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDetails>> {
        if (requestParameters.userDetailsRequest === null || requestParameters.userDetailsRequest === undefined) {
            throw new runtime.RequiredError('userDetailsRequest','Required parameter requestParameters.userDetailsRequest was null or undefined when calling authUserUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/api/auth/user/`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserDetailsRequestToJSON(requestParameters.userDetailsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDetailsFromJSON(jsonValue));
    }

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.  Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     */
    async authUserUpdate(requestParameters: AuthUserUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDetails> {
        const response = await this.authUserUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
