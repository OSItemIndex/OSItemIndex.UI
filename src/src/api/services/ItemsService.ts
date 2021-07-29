/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OsrsBoxItem } from '../models/OsrsBoxItem';
import { request as __request } from '../core/request';

export class ItemsService {

    /**
     * @param name 
     * @param duplicate 
     * @param noted 
     * @param placeholder 
     * @param stackable 
     * @param tradeableOnGe 
     * @returns OsrsBoxItem Success
     * @throws ApiError
     */
    public static async getItems(
name?: string,
duplicate?: boolean,
noted?: boolean,
placeholder?: boolean,
stackable?: boolean,
tradeableOnGe?: boolean,
): Promise<Array<OsrsBoxItem>> {
        const result = await __request({
            method: 'GET',
            path: `/items`,
            query: {
                'Name': name,
                'Duplicate': duplicate,
                'Noted': noted,
                'Placeholder': placeholder,
                'Stackable': stackable,
                'TradeableOnGe': tradeableOnGe,
            },
        });
        return result.body;
    }

    /**
     * @param name 
     * @param duplicate 
     * @param noted 
     * @param placeholder 
     * @param stackable 
     * @param tradeableOnGe 
     * @returns OsrsBoxItem Success
     * @throws ApiError
     */
    public static async getItemsSimple(
name?: string,
duplicate?: boolean,
noted?: boolean,
placeholder?: boolean,
stackable?: boolean,
tradeableOnGe?: boolean,
): Promise<Array<OsrsBoxItem>> {
        const result = await __request({
            method: 'GET',
            path: `/items/simple`,
            query: {
                'Name': name,
                'Duplicate': duplicate,
                'Noted': noted,
                'Placeholder': placeholder,
                'Stackable': stackable,
                'TradeableOnGe': tradeableOnGe,
            },
        });
        return result.body;
    }

    /**
     * @param id 
     * @returns OsrsBoxItem Success
     * @throws ApiError
     */
    public static async getItemById(
id: number,
): Promise<OsrsBoxItem> {
        const result = await __request({
            method: 'GET',
            path: `/items/${id}`,
        });
        return result.body;
    }

}