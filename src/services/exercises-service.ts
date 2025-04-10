import { makeGetRequest } from '../js/services/request';
import { ExercisesRequest } from '../js/types/request.types';
import { ExercisesResponse } from '../js/types/response.types';

/**
 * Получает список упражнений по заданным параметрам.
 */
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
