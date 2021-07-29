/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WeaponAttackStyle } from './WeaponAttackStyle';
import type { WeaponAttackType } from './WeaponAttackType';
import type { WeaponBoosts } from './WeaponBoosts';
import type { WeaponCombatStyle } from './WeaponCombatStyle';
import type { WeaponExperienceStyle } from './WeaponExperienceStyle';

export type WeaponStance = {
    attack_style?: WeaponAttackStyle;
    attack_type?: WeaponAttackType;
    boosts?: WeaponBoosts;
    combat_style?: WeaponCombatStyle;
    experience?: WeaponExperienceStyle;
}