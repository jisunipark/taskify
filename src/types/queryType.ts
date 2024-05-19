export interface MutationError extends Error {
  response?: {
    status: number;
  };
}
