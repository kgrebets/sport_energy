import { FilterRequest } from "../js/types/request.types";
import { FilterResponse } from "../models/filter-response";
import { ApiConfig } from "./api-config";

export async function getFilters(filterRequest: FilterRequest): Promise<FilterResponse> {
    const url = `${ApiConfig.ApiBaseUrl}/filters?filter=${encodeURIComponent(filterRequest.filter)}&page=${filterRequest.page}&limit=${filterRequest.limit}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch filters: ${response.status}`);
    }

    const data = await response.json();
    return FilterResponse.fromJson(data);
}