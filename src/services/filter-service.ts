import { FilterResponse } from "../models/filter-response";
import { ApiConfig } from "./api-config";

export class FilterService {

    static async getFilters(
        filter: string,
        page: number,
        limit: number
    ): Promise<FilterResponse> {
        const url = `${ApiConfig.ApiBaseUrl}/filters?filter=${encodeURIComponent(filter)}&page=${page}&limit=${limit}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch filters: ${response.status}`);
        }

        const data = await response.json();
        return FilterResponse.fromJson(data);
    }
}
