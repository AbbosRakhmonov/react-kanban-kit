import { default as React } from 'react';
import { BoardItem, BoardProps, ConfigMap, DndState, ScrollEvent } from '../types';

interface Props {
    items: BoardItem[];
    column: BoardItem;
    columnListContentStyle?: (column: BoardItem) => React.CSSProperties;
    columnListContentClassName?: string;
    configMap: ConfigMap;
    renderSkeletonCard?: BoardProps["renderSkeletonCard"];
    cardWrapperStyle?: (card: BoardItem, column: BoardItem) => React.CSSProperties;
    cardWrapperClassName?: string;
    onScroll?: (e: ScrollEvent, column: BoardItem) => void;
    onCardClick?: (e: React.MouseEvent<HTMLDivElement>, card: BoardItem) => void;
    loadMore?: (columnId: string) => void;
    cardOverShadowCount?: number;
    cardOverHeight?: number;
    onCardDndStateChange?: (info: DndState) => void;
    renderCardDragIndicator?: (card: BoardItem, info: any) => React.ReactNode;
    renderCardDragPreview?: (card: BoardItem, info: any) => React.ReactNode;
    renderListFooter?: (column: BoardItem) => React.ReactNode;
    renderGap?: (column: BoardItem) => React.ReactNode;
}
declare const ColumnContent: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default ColumnContent;
