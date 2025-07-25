/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { Message } from "./Message";
import { StepFeedback } from "./StepFeedback";

export const Step: core.serialization.ObjectSchema<serializers.Step.Raw, Letta.Step> = core.serialization.object({
    id: core.serialization.string(),
    origin: core.serialization.string().optional(),
    providerId: core.serialization.property("provider_id", core.serialization.string().optional()),
    jobId: core.serialization.property("job_id", core.serialization.string().optional()),
    agentId: core.serialization.property("agent_id", core.serialization.string().optional()),
    providerName: core.serialization.property("provider_name", core.serialization.string().optional()),
    providerCategory: core.serialization.property("provider_category", core.serialization.string().optional()),
    model: core.serialization.string().optional(),
    modelEndpoint: core.serialization.property("model_endpoint", core.serialization.string().optional()),
    contextWindowLimit: core.serialization.property("context_window_limit", core.serialization.number().optional()),
    completionTokens: core.serialization.property("completion_tokens", core.serialization.number().optional()),
    promptTokens: core.serialization.property("prompt_tokens", core.serialization.number().optional()),
    totalTokens: core.serialization.property("total_tokens", core.serialization.number().optional()),
    completionTokensDetails: core.serialization.property(
        "completion_tokens_details",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
    tags: core.serialization.list(core.serialization.string()).optional(),
    tid: core.serialization.string().optional(),
    traceId: core.serialization.property("trace_id", core.serialization.string().optional()),
    messages: core.serialization.list(Message).optional(),
    feedback: StepFeedback.optional(),
    projectId: core.serialization.property("project_id", core.serialization.string().optional()),
});

export declare namespace Step {
    export interface Raw {
        id: string;
        origin?: string | null;
        provider_id?: string | null;
        job_id?: string | null;
        agent_id?: string | null;
        provider_name?: string | null;
        provider_category?: string | null;
        model?: string | null;
        model_endpoint?: string | null;
        context_window_limit?: number | null;
        completion_tokens?: number | null;
        prompt_tokens?: number | null;
        total_tokens?: number | null;
        completion_tokens_details?: Record<string, unknown> | null;
        tags?: string[] | null;
        tid?: string | null;
        trace_id?: string | null;
        messages?: Message.Raw[] | null;
        feedback?: StepFeedback.Raw | null;
        project_id?: string | null;
    }
}
