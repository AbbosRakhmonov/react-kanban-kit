import { default as React } from 'react';
import { BoardItem, BoardProps, ConfigMap, DndState } from '../types';

interface Props {
    index: number;
    options: {
        data: BoardItem;
        column: BoardItem;
        configMap: ConfigMap;
        isSkeleton: boolean;
        isShadow: boolean;
        isListFooter: boolean;
        renderListFooter?: (column: BoardItem) => React.ReactNode;
        cardWrapperStyle?: (card: BoardItem, column: BoardItem) => React.CSSProperties;
        cardWrapperClassName?: string;
        cardsGap?: number;
        renderSkeletonCard?: BoardProps["renderSkeletonCard"];
        onCardDndStateChange?: (info: DndState) => void;
        onCardClick?: (e: React.MouseEvent<HTMLDivElement>, card: BoardItem) => void;
        cardOverHeight?: number;
        renderCardDragIndicator?: (card: BoardItem, info: any) => React.ReactNode;
        renderCardDragPreview?: (card: BoardItem, info: any) => React.ReactNode;
        renderGap?: (column: BoardItem) => React.ReactNode;
    };
}
declare const GenericItem: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default GenericItem;
