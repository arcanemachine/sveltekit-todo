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
  PatchedTodo,
  Todo,
} from '../models';
import {
    PatchedTodoFromJSON,
    PatchedTodoToJSON,
    TodoFromJSON,
    TodoToJSON,
} from '../models';

export interface TodosCreateRequest {
    todo: Todo;
}

export interface TodosDestroyRequest {
    id: number;
}

export interface TodosPartialUpdateRequest {
    id: number;
    patchedTodo?: PatchedTodo;
}

export interface TodosRetrieveRequest {
    id: number;
}

export interface TodosUpdateRequest {
    id: number;
    todo: Todo;
}

/**
 * 
 */
export class TodosApi extends runtime.BaseAPI {

    /**
     */
    async todosCreateRaw(requestParameters: TodosCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Todo>> {
        if (requestParameters.todo === null || requestParameters.todo === undefined) {
            throw new runtime.RequiredError('todo','Required parameter requestParameters.todo was null or undefined when calling todosCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/todos`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TodoToJSON(requestParameters.todo),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TodoFromJSON(jsonValue));
    }

    /**
     */
    async todosCreate(requestParameters: TodosCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Todo> {
        const response = await this.todosCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async todosDestroyRaw(requestParameters: TodosDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling todosDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/todos/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async todosDestroy(requestParameters: TodosDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.todosDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async todosListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Todo>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/todos`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TodoFromJSON));
    }

    /**
     */
    async todosList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Todo>> {
        const response = await this.todosListRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async todosPartialUpdateRaw(requestParameters: TodosPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Todo>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling todosPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/todos/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedTodoToJSON(requestParameters.patchedTodo),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TodoFromJSON(jsonValue));
    }

    /**
     */
    async todosPartialUpdate(requestParameters: TodosPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Todo> {
        const response = await this.todosPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async todosRetrieveRaw(requestParameters: TodosRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Todo>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling todosRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/todos/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TodoFromJSON(jsonValue));
    }

    /**
     */
    async todosRetrieve(requestParameters: TodosRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Todo> {
        const response = await this.todosRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async todosUpdateRaw(requestParameters: TodosUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Todo>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling todosUpdate.');
        }

        if (requestParameters.todo === null || requestParameters.todo === undefined) {
            throw new runtime.RequiredError('todo','Required parameter requestParameters.todo was null or undefined when calling todosUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/todos/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TodoToJSON(requestParameters.todo),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TodoFromJSON(jsonValue));
    }

    /**
     */
    async todosUpdate(requestParameters: TodosUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Todo> {
        const response = await this.todosUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
