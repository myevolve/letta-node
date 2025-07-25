/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../../../../index";

/**
 * @example
 *     {}
 */
export interface AgentsSearchRequest {
    search?: Letta.AgentsSearchRequestSearchItem[];
    projectId?: string;
    combinator?: "AND";
    limit?: number;
    after?: string;
    sortBy?: Letta.AgentsSearchRequestSortBy;
    ascending?: boolean;
}
