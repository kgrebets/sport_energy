import { makeGetRequest } from '../js/services/request';
import { ExercisesRequest } from '../js/types/request.types';
import { ExercisesResponse } from '../js/types/response.types';


export async function getExercises(
  params: Partial<ExercisesRequest>
): Promise<ExercisesResponse> {
  const response = await makeGetRequest<ExercisesRequest, ExercisesResponse>(
    'exercises',
    params
  );
  if (!response) {
    throw new Error('Cannot get exercises');
  }
  return response;
}