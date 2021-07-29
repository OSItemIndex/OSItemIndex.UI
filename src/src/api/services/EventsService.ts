/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Event } from '../models/Event';
import type { EventSource } from '../models/EventSource';
import type { EventType } from '../models/EventType';
import { request as __request } from '../core/request';

export class EventsService {

    /**
     * @param source 
     * @param type 
     * @returns Event Success
     * @throws ApiError
     */
    public static async getEvents(
source?: EventSource,
type?: EventType,
): Promise<Array<Event>> {
        const result = await __request({
            method: 'GET',
            path: `/events`,
            query: {
                'Source': source,
                'Type': type,
            },
        });
        return result.body;
    }

    /**
     * @param source 
     * @param type 
     * @returns Event Success
     * @throws ApiError
     */
    public static async getMostRecentEvent(
source?: EventSource,
type?: EventType,
): Promise<Event> {
        const result = await __request({
            method: 'GET',
            path: `/events/recent`,
            query: {
                'Source': source,
                'Type': type,
            },
        });
        return result.body;
    }

}