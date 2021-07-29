/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WeaponClassType } from './WeaponClassType';
import type { WeaponStance } from './WeaponStance';

/**
 * The weapon bonuses including attack speed, type and stance.
 */
export type WeaponInfo = {
    /**
     * The attack speed of a weapon (in game ticks).
     */
    attack_speed?: number;
    /**
     * An array of weapon stance information.
     */
    stances?: Array<WeaponStance> | null;
    weapon_type?: WeaponClassType;
}