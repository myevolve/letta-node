/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const FeedbackType: core.serialization.Schema<serializers.FeedbackType.Raw, Letta.FeedbackType> =
    core.serialization.enum_(["positive", "negative"]);

export declare namespace FeedbackType {
    export type Raw = "positive" | "negative";
}
