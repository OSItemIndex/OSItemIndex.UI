/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EquipmentSlot } from './EquipmentSlot';

/**
 * The equipment bonuses of equipable armour/weapons.
 */
export type Equipment = {
    /**
     * The attack crush bonus of the item.
     */
    attack_crush?: number;
    /**
     * The attack magic bonus of the item.
     */
    attack_magic?: number;
    /**
     * The attack ranged bonus of the item.
     */
    attack_ranged?: number;
    /**
     * The attack slash bonus of the item.
     */
    attack_slash?: number;
    /**
     * The attack stab bonus of the item.
     */
    attack_stab?: number;
    /**
     * The defence crush bonus of the item.
     */
    defence_crush?: number;
    /**
     * The defence magic bonus of the item.
     */
    defence_magic?: number;
    /**
     * The defence ranged bonus of the item.
     */
    defence_ranged?: number;
    /**
     * The defence slash bonus of the item.
     */
    defence_slash?: number;
    /**
     * The defence stab bonus of the item.
     */
    defence_stab?: number;
    /**
     * The magic damage bonus of the item.
     */
    magic_damage?: number;
    /**
     * The melee strength bonus of the item.
     */
    melee_strength?: number;
    /**
     * The prayer bonus of the item.
     */
    prayer?: number;
    /**
     * The ranged strength bonus of the item.
     */
    ranged_strength?: number;
    /**
     * An object of requirements {skill: level}.
     */
    requirements?: Record<string, any> | null;
    slot?: EquipmentSlot;
}