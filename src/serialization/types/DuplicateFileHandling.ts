/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const DuplicateFileHandling: core.serialization.Schema<
    serializers.DuplicateFileHandling.Raw,
    Letta.DuplicateFileHandling
> = core.serialization.enum_(["skip", "error", "suffix"]);

export declare namespace DuplicateFileHandling {
    export type Raw = "skip" | "error" | "suffix";
}
