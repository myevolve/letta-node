/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

/**
 * Complete metadata response for organization sources
 */
export interface OrganizationSourcesStats {
    /** Total number of sources */
    totalSources?: number;
    /** Total number of files across all sources */
    totalFiles?: number;
    /** Total size of all files in bytes */
    totalSize?: number;
    /** List of source metadata */
    sources?: Letta.SourceStats[];
}
