import { makeGetRequest } from "../js/services/request";
import { FilterRequest } from "../js/types/request.types";
import { FiltersResponse } from "../js/types/response.types";

export async function getFilters(filterRequest: FilterRequest): Promise<FiltersResponse> {
    const response = await makeGetRequest<FilterRequest, FiltersResponse>("filters", filterRequest);
    if (!response) {
        throw new Error("Cant' get filters");
    }
    return response;
}