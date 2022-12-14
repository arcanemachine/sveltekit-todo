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
 * @interface RestAuthDetail
 */
export interface RestAuthDetail {
    /**
     * 
     * @type {string}
     * @memberof RestAuthDetail
     */
    readonly detail?: string;
}

/**
 * Check if a given object implements the RestAuthDetail interface.
 */
export function instanceOfRestAuthDetail(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RestAuthDetailFromJSON(json: any): RestAuthDetail {
    return RestAuthDetailFromJSONTyped(json, false);
}

export function RestAuthDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestAuthDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'detail': !exists(json, 'detail') ? undefined : json['detail'],
    };
}

export function RestAuthDetailToJSON(value?: RestAuthDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

