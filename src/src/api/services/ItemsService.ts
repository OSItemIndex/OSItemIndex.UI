/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OsrsBoxItem } from '../models/OsrsBoxItem';
import { request as __request } from '../core/request';

export class ItemsService {

    /**
     * GET all items in the database
     * @param name 
     * @param duplicate 
     * @param noted 
     * @param placeholder 
     * @param stackable 
     * @param tradeableOnGe 
     * @returns OsrsBoxItem Retrieved an array of all item information from the database
     * @throws ApiError
     */
    public static async getItemsQuery(
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
     * GET all items in the database but only include simple fields
     * test
     * @param name 
     * @param duplicate 
     * @param noted 
     * @param placeholder 
     * @param stackable 
     * @param tradeableOnGe 
     * @returns OsrsBoxItem Retrieved an array of simplified item information from the database
     * @throws ApiError
     */
    public static async getItemsSimpleQuery(
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
     * GET an item by an Item ID
     * @param id 
     * @returns OsrsBoxItem Retrieved a specific item by ID
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