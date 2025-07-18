/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const StepsListRequestFeedback: core.serialization.Schema<
    serializers.StepsListRequestFeedback.Raw,
    Letta.StepsListRequestFeedback
> = core.serialization.enum_(["positive", "negative"]);

export declare namespace StepsListRequestFeedback {
    export type Raw = "positive" | "negative";
}
