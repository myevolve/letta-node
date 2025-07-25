/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { McpTool } from "../../../types/McpTool";

export const Response: core.serialization.Schema<serializers.tools.testMcpServer.Response.Raw, Letta.McpTool[]> =
    core.serialization.list(McpTool);

export declare namespace Response {
    export type Raw = McpTool.Raw[];
}
