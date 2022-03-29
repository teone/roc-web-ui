export const StateIdle = 'idle'
export const StateLoading = 'loading'
export const StateSucceded = 'succeeded'
export const StateFailed = 'failed'
export type LoadingStatus = typeof StateIdle | typeof StateLoading | typeof StateSucceded| typeof StateFailed
