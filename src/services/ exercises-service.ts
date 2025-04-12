import { makeGetRequest } from '../js/services/request';
import { ExercisesRequest } from '../js/types/request.types';
import {
  ExerciseResponse,
  ExercisesResponse,
} from '../js/types/response.types';

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

export async function getExerciseById(
  id: string
): Promise<ExerciseResponse | null> {
  const response = await makeGetRequest<void, ExerciseResponse>(
    `exercises/${id}`
  );
  if (!response) {
    throw new Error('Cannot get exercise by id');
  }
  return response;
}
