/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface Step {
    /** The id of the step. Assigned by the database. */
    id: string;
    /** The surface that this agent step was initiated from. */
    origin?: string;
    /** The unique identifier of the provider that was configured for this step */
    providerId?: string;
    /** The unique identifier of the job that this step belongs to. Only included for async calls. */
    jobId?: string;
    /** The ID of the agent that performed the step. */
    agentId?: string;
    /** The name of the provider used for this step. */
    providerName?: string;
    /** The category of the provider used for this step. */
    providerCategory?: string;
    /** The name of the model used for this step. */
    model?: string;
    /** The model endpoint url used for this step. */
    modelEndpoint?: string;
    /** The context window limit configured for this step. */
    contextWindowLimit?: number;
    /** The number of tokens generated by the agent during this step. */
    completionTokens?: number;
    /** The number of tokens in the prompt during this step. */
    promptTokens?: number;
    /** The total number of tokens processed by the agent during this step. */
    totalTokens?: number;
    /** Metadata for the agent. */
    completionTokensDetails?: Record<string, unknown>;
    /** Metadata tags. */
    tags?: string[];
    /** The unique identifier of the transaction that processed this step. */
    tid?: string;
    /** The trace id of the agent step. */
    traceId?: string;
    /** The messages generated during this step. */
    messages?: Letta.Message[];
    /** The feedback for this step. Must be either 'positive' or 'negative'. */
    feedback?: Letta.StepFeedback;
    /** The project that the agent that executed this step belongs to (cloud only). */
    projectId?: string;
}
