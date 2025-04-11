export type FilterType = 'Body parts' | 'Equipment' | 'Muscles';

export type BodyPart =
  | 'back'
  | 'cardio'
  | 'chest'
  | 'lower arms'
  | 'lower legs'
  | 'neck'
  | 'shoulders'
  | 'upper arms'
  | 'upper legs'
  | 'waist';

export type MuscleGroup =
  | 'abductors'
  | 'abs'
  | 'adductors'
  | 'biceps'
  | 'calves'
  | 'cardiovascular system'
  | 'delts'
  | 'forearms'
  | 'glutes'
  | 'hamstrings'
  | 'lats'
  | 'levator scapulae'
  | 'pectorals'
  | 'quads'
  | 'serratus anterior'
  | 'spine'
  | 'traps'
  | 'triceps'
  | 'upper back';

export type Equipment =
  | 'assisted'
  | 'band'
  | 'barbell'
  | 'body weight'
  | 'bosu ball'
  | 'cable'
  | 'dumbbell'
  | 'elliptical machine'
  | 'ez barbell'
  | 'hammer'
  | 'kettlebell'
  | 'leverage machine'
  | 'medicine ball'
  | 'olympic barbell'
  | 'resistance band'
  | 'roller'
  | 'rope'
  | 'skierg machine'
  | 'sled machine'
  | 'smith machine'
  | 'stability ball'
  | 'stationary bike'
  | 'stepmill machine'
  | 'tire'
  | 'trap bar'
  | 'upper body ergometer'
  | 'weighted'
  | 'wheel roller';


  export interface Exercise {
    _id: string;
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    name: string;
    target: string;
    description: string;
    rating: number;
    burnedCalories: number;
    time: number;
    popularity: number;
  }