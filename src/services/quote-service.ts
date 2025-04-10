import { makeGetRequest } from "../js/services/request";
import { QuoteResponse } from "../js/types/response.types";


export async function getQuote(): Promise<QuoteResponse> {
    const response = await makeGetRequest<QuoteResponse, void>("quote");
    if (!response) {
        throw new Error("Cant' get quote");
    }
    return response;
}