import axios from "axios";
import {YOUR_ENERGY_API_URL} from "../constants/general";
import {showErrorMessage} from "../utils/toasts";
// TODO: Example of request. Remove when go live.
// import {ExercisesRequest, ExercisesResponse, FilterRequest, FilterResponse} from "../types/api-types";

/**
 * Makes an asynchronous HTTP GET request to the specified API endpoint and retrieves data.
 *
 * @template T - The type of the requestData parameter.
 * @template K - The type of the data expected in the response.
 *
 * @param {string} endpoint - The API endpoint to which the GET request is sent.
 * @param {Partial<T>} requestData - An object containing query parameters for the GET request.
 *
 * @returns {Promise<K>} A promise that resolves to the data retrieved from the API response.
 */
export const makeGetRequest = async <T, K>(endpoint: string, requestData?: Partial<T>): Promise<K | undefined> => {
  try {
    const { data } = await axios.get<K>(`${YOUR_ENERGY_API_URL}${endpoint}`, {
      params: requestData
    });

    return data;
  } catch (e) {
    console.error(e);
    showErrorMessage();
  }
}

/**
 * Sends an asynchronous POST request to a specified API endpoint with the provided request data,
 * and returns the response data.
 *
 * @template T The type of the request data to be sent in the POST request.
 * @template K The type of the response data expected from the POST request.
 *
 * @param {string} endpoint The API endpoint to which the POST request will be sent.
 * @param {T} requestData The data to be sent in the body of the POST request.
 *
 * @returns {Promise<K>} A promise that resolves to the response data from the server.
 */
export const makePostRequest = async <T, K>(endpoint: string, requestData: T): Promise<K | undefined> => {
  try {
    const { data } = await axios.post<K>(`${YOUR_ENERGY_API_URL}${endpoint}`, requestData);

    return data;
  } catch (e) {
    console.error(e);
    showErrorMessage();
  }
}

/**
 * Sends an asynchronous HTTP PATCH request to the specified API endpoint.
 *
 * @template T The type of the request payload.
 * @template K The expected type of the response data.
 *
 * @param {string} endpoint - The API endpoint to which the PATCH request will be sent, appended to the base URL.
 * @param {T} requestData - The payload to be sent with the PATCH request.
 * @returns {Promise<K>} A promise that resolves to the response data of type K.
 *
 * @throws {Error} Throws an error if the HTTP request fails or if there is an issue with the response.
 */
export const makePatchRequest = async <T, K>(endpoint: string, requestData: T): Promise<K | undefined> => {
  try {
    const { data } = await axios.patch<K>(`${YOUR_ENERGY_API_URL}${endpoint}`, requestData);

    return data;
  } catch (e) {
    console.error(e);
    showErrorMessage();
  }
}

// TODO: Example of request. Remove when go live.
// makeGetRequest<ExercisesRequest, ExercisesResponse>('exercises', {
//   bodypart: 'back',
//   muscles: 'abductors',
//   equipment: 'band',
//   keyword: 'back',
//   page: 1,
//   limit: 10,
// }).then(data => console.log('Exercises', data));
//
// makeGetRequest<FilterRequest, FilterResponse>('exercises', {
//   filter: 'Body parts',
//   page: 1,
//   limit: 12,
// }).then(data => console.log('Filters', data));