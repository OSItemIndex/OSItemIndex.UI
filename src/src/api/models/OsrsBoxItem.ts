/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Equipment } from './Equipment';
import type { WeaponInfo } from './WeaponInfo';

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
     * The last time (UTC) the item was updated (in ISO8601 date format).
     */
    last_updated?: string | null;
    /**
     * The Grand Exchange buy limit of the item.
     */
    buy_limit?: number | null;
    /**
     * The store price of an item.
     */
    cost?: number | null;
    /**
     * If the item is a duplicate.
     */
    duplicate?: boolean;
    /**
     * If the item is equipable (based on right-click menu entry).
     */
    equipable?: boolean;
    /**
     * If the item is equipable in-game by a player.
     */
    equipable_by_player?: boolean;
    /**
     * If the item is an equipable weapon.
     */
    equipable_weapon?: boolean;
    equipment?: Equipment;
    /**
     * The examine text for the item.
     */
    examine?: string | null;
    /**
     * The high alchemy value of the item (cost * 0.6).
     */
    highalch?: number | null;
    /**
     * The item icon (in base64 encoding).
     */
    icon?: string | null;
    /**
     * If the item has incomplete wiki data.
     */
    incomplete?: boolean;
    /**
     * The linked ID of the actual item (if noted/placeholder).
     */
    linked_id_item?: number | null;
    /**
     * The linked ID of an item in noted form.
     */
    linked_id_noted?: number | null;
    /**
     * The linked ID of an item in placeholder form.
     */
    linked_id_placeholder?: number | null;
    /**
     * The low alchemy value of the item (cost * 0.4).
     */
    lowalch?: number | null;
    /**
     * If the item is a members-only.
     */
    members?: boolean;
    /**
     * If the item is noteable.
     */
    noteable?: boolean;
    /**
     * If the item is noted.
     */
    noted?: boolean;
    /**
     * If the item is a placeholder.
     */
    placeholder?: boolean;
    /**
     * If the item is associated with a quest.
     */
    quest_item?: boolean;
    /**
     * Date the item was released (in ISO8601 format).
     */
    release_date?: string | null;
    /**
     * If the item is stackable (in inventory).
     */
    stackable?: boolean;
    /**
     * If the item is stacked, indicated by the stack count.
     */
    stacked?: number | null;
    /**
     * If the item is tradeable (between players and on the GE).
     */
    tradeable?: boolean;
    /**
     * If the item is tradeable (only on GE).
     */
    tradeable_on_ge?: boolean;
    weapon?: WeaponInfo;
    /**
     * The weight (in kilograms) of the item.
     */
    weight?: number | null;
    /**
     * The OSRS Wiki name for the item.
     */
    wiki_name?: string | null;
    /**
     * The OSRS Wiki URL (possibly including anchor link).
     */
    wiki_url?: string | null;
}