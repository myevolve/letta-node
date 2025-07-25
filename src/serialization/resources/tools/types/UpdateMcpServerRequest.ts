/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateSsemcpServer } from "../../../types/UpdateSsemcpServer";
import { UpdateStreamableHttpmcpServer } from "../../../types/UpdateStreamableHttpmcpServer";

export const UpdateMcpServerRequest: core.serialization.Schema<
    serializers.UpdateMcpServerRequest.Raw,
    Letta.UpdateMcpServerRequest
> = core.serialization.undiscriminatedUnion([UpdateSsemcpServer, UpdateStreamableHttpmcpServer]);

export declare namespace UpdateMcpServerRequest {
    export type Raw = UpdateSsemcpServer.Raw | UpdateStreamableHttpmcpServer.Raw;
}
