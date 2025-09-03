import { default as React } from 'react';

export type SkeletonAnimationType = "shimmer" | "pulse" | "wave";
interface CardSkeletonProps {
    className?: string;
    style?: React.CSSProperties;
    animationType?: SkeletonAnimationType;
}
declare const CardSkeleton: React.FC<CardSkeletonProps>;
export default CardSkeleton;
