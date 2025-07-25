/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { JobStatus } from "./JobStatus";
import { JobType } from "./JobType";

export const Job: core.serialization.ObjectSchema<serializers.Job.Raw, Letta.Job> = core.serialization.object({
    createdById: core.serialization.property("created_by_id", core.serialization.string().optional()),
    lastUpdatedById: core.serialization.property("last_updated_by_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    status: JobStatus.optional(),
    completedAt: core.serialization.property("completed_at", core.serialization.date().optional()),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    jobType: core.serialization.property("job_type", JobType.optional()),
    callbackUrl: core.serialization.property("callback_url", core.serialization.string().optional()),
    callbackSentAt: core.serialization.property("callback_sent_at", core.serialization.date().optional()),
    callbackStatusCode: core.serialization.property("callback_status_code", core.serialization.number().optional()),
    callbackError: core.serialization.property("callback_error", core.serialization.string().optional()),
    id: core.serialization.string().optional(),
});

export declare namespace Job {
    export interface Raw {
        created_by_id?: string | null;
        last_updated_by_id?: string | null;
        created_at?: string | null;
        updated_at?: string | null;
        status?: JobStatus.Raw | null;
        completed_at?: string | null;
        metadata?: Record<string, unknown> | null;
        job_type?: JobType.Raw | null;
        callback_url?: string | null;
        callback_sent_at?: string | null;
        callback_status_code?: number | null;
        callback_error?: string | null;
        id?: string | null;
    }
}
