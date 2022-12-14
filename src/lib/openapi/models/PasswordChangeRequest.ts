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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PasswordChangeRequest
 */
export interface PasswordChangeRequest {
    /**
     * 
     * @type {string}
     * @memberof PasswordChangeRequest
     */
    newPassword1: string;
    /**
     * 
     * @type {string}
     * @memberof PasswordChangeRequest
     */
    newPassword2: string;
}

/**
 * Check if a given object implements the PasswordChangeRequest interface.
 */
export function instanceOfPasswordChangeRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "newPassword1" in value;
    isInstance = isInstance && "newPassword2" in value;

    return isInstance;
}

export function PasswordChangeRequestFromJSON(json: any): PasswordChangeRequest {
    return PasswordChangeRequestFromJSONTyped(json, false);
}

export function PasswordChangeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PasswordChangeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'newPassword1': json['new_password1'],
        'newPassword2': json['new_password2'],
    };
}

export function PasswordChangeRequestToJSON(value?: PasswordChangeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'new_password1': value.newPassword1,
        'new_password2': value.newPassword2,
    };
}

