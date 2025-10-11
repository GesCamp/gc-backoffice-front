export const SkeletonSize = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  '2XL': '2xl',
  '3XL': '3xl',
} as const;

export type SkeletonSize = (typeof SkeletonSize)[keyof typeof SkeletonSize];

export const SkeletonSizeClass = {
  [SkeletonSize.XS]: 'h-6',
  [SkeletonSize.SM]: 'h-10',
  [SkeletonSize.MD]: 'h-16',
  [SkeletonSize.LG]: 'h-24',
  [SkeletonSize.XL]: 'h-34',
  [SkeletonSize['2XL']]: 'h-48',
  [SkeletonSize['3XL']]: 'h-64',
} as const satisfies Readonly<Record<SkeletonSize, Lowercase<`h-${string}`>>>;

export type SkeletonSizeClass = (typeof SkeletonSizeClass)[keyof typeof SkeletonSizeClass];
