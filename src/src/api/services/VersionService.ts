/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VersionInfo } from '../models/VersionInfo';
import { request as __request } from '../core/request';

export class VersionService {

    /**
     * Retrieve the internal versioning information of the database
     * @returns VersionInfo Retrieved latest version in the database
     * @throws ApiError
     */
    public static async getVersion(): Promise<VersionInfo> {
        const result = await __request({
            method: 'GET',
            path: `/version`,
        });
        return result.body;
    }

}