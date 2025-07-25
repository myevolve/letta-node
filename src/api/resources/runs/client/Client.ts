/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Letta from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";
import { Messages } from "../resources/messages/client/Client";
import { Usage } from "../resources/usage/client/Client";
import { Steps } from "../resources/steps/client/Client";

export declare namespace Runs {
    export interface Options {
        environment?: core.Supplier<environments.LettaEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<string | undefined>;
        /** Override the X-Project header */
        project?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Project header */
        project?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Runs {
    protected _messages: Messages | undefined;
    protected _usage: Usage | undefined;
    protected _steps: Steps | undefined;

    constructor(protected readonly _options: Runs.Options = {}) {}

    public get messages(): Messages {
        return (this._messages ??= new Messages(this._options));
    }

    public get usage(): Usage {
        return (this._usage ??= new Usage(this._options));
    }

    public get steps(): Steps {
        return (this._steps ??= new Steps(this._options));
    }

    /**
     * List all runs.
     *
     * @param {Letta.RunsListRequest} request
     * @param {Runs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.runs.list()
     */
    public async list(request: Letta.RunsListRequest = {}, requestOptions?: Runs.RequestOptions): Promise<Letta.Run[]> {
        const { agentIds } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (agentIds != null) {
            if (Array.isArray(agentIds)) {
                _queryParams["agent_ids"] = agentIds.map((item) => item);
            } else {
                _queryParams["agent_ids"] = agentIds;
            }
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LettaEnvironment.LettaCloud,
                "v1/runs/",
            ),
            method: "GET",
            headers: {
                "X-Project":
                    (await core.Supplier.get(this._options.project)) != null
                        ? await core.Supplier.get(this._options.project)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.150",
                "User-Agent": "@letta-ai/letta-client/0.1.150",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.runs.list.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.LettaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LettaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LettaTimeoutError("Timeout exceeded when calling GET /v1/runs/.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * List all active runs.
     *
     * @param {Letta.RunsListActiveRequest} request
     * @param {Runs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.runs.listActive()
     */
    public async listActive(
        request: Letta.RunsListActiveRequest = {},
        requestOptions?: Runs.RequestOptions,
    ): Promise<Letta.Run[]> {
        const { agentIds } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (agentIds != null) {
            if (Array.isArray(agentIds)) {
                _queryParams["agent_ids"] = agentIds.map((item) => item);
            } else {
                _queryParams["agent_ids"] = agentIds;
            }
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LettaEnvironment.LettaCloud,
                "v1/runs/active",
            ),
            method: "GET",
            headers: {
                "X-Project":
                    (await core.Supplier.get(this._options.project)) != null
                        ? await core.Supplier.get(this._options.project)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.150",
                "User-Agent": "@letta-ai/letta-client/0.1.150",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.runs.listActive.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.LettaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LettaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LettaTimeoutError("Timeout exceeded when calling GET /v1/runs/active.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get the status of a run.
     *
     * @param {string} runId
     * @param {Runs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.runs.retrieve("run_id")
     */
    public async retrieve(runId: string, requestOptions?: Runs.RequestOptions): Promise<Letta.Run> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LettaEnvironment.LettaCloud,
                `v1/runs/${encodeURIComponent(runId)}`,
            ),
            method: "GET",
            headers: {
                "X-Project":
                    (await core.Supplier.get(this._options.project)) != null
                        ? await core.Supplier.get(this._options.project)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.150",
                "User-Agent": "@letta-ai/letta-client/0.1.150",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Run.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.LettaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LettaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LettaTimeoutError("Timeout exceeded when calling GET /v1/runs/{run_id}.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a run by its run_id.
     *
     * @param {string} runId
     * @param {Runs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.runs.delete("run_id")
     */
    public async delete(runId: string, requestOptions?: Runs.RequestOptions): Promise<Letta.Run> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LettaEnvironment.LettaCloud,
                `v1/runs/${encodeURIComponent(runId)}`,
            ),
            method: "DELETE",
            headers: {
                "X-Project":
                    (await core.Supplier.get(this._options.project)) != null
                        ? await core.Supplier.get(this._options.project)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.150",
                "User-Agent": "@letta-ai/letta-client/0.1.150",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Run.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.LettaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LettaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LettaTimeoutError("Timeout exceeded when calling DELETE /v1/runs/{run_id}.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const tokenValue = await core.Supplier.get(this._options.token);
        return { Authorization: `Bearer ${tokenValue}` };
    }
}
