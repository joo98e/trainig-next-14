export const globalSizeVariant = ['sm', 'md', 'lg', 'xl'] as const
export type GlobalSizeVariant = (typeof globalSizeVariant)[number]
