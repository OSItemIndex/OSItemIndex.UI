/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OsrsBoxItem = {
    /**
     * Unique OSRS item ID number.
     */
    id?: number;
    /**
     * The name of the item.
     */
    name?: string | null;
    /**
     * If the item is a duplicate.
     */
    duplicate?: boolean | null;
    /**
     * If the item is noted.
     */
    noted?: boolean | null;
    /**
     * If the item is a placeholder.
     */
    placeholder?: boolean | null;
    /**
     * If the item is stackable (in inventory).
     */
    stackable?: boolean | null;
    /**
     * If the item is tradeable (only on GE).
     */
    tradeable_on_ge?: boolean | null;
    /**
     * The last time (UTC) the item was updated (in ISO8601 date format).
     */
    last_updated?: string | null;
    /**
     * OSRSBox item document.
     */
    document?: string | null;
}