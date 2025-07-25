/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../../../../index";

/**
 * @example
 *     {
 *         name: "name",
 *         providerType: "anthropic",
 *         apiKey: "api_key"
 *     }
 */
export interface ProviderCreate {
    /** The name of the provider. */
    name: string;
    /** The type of the provider. */
    providerType: Letta.ProviderType;
    /** API key or secret key used for requests to the provider. */
    apiKey: string;
    /** Access key used for requests to the provider. */
    accessKey?: string;
    /** Region used for requests to the provider. */
    region?: string;
}
