/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventSource } from './EventSource';
import type { EventType } from './EventType';

export type Event = {
    id?: number;
    timestamp?: string;
    type?: EventType;
    source?: EventSource;
    details?: any;
}