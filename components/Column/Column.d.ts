import { default as React } from 'react';
import { BoardItem, BoardProps, ConfigMap, DndState, ScrollEvent } from '../types';

interface Props {
    index: number;
    data: BoardItem;
    configMap: ConfigMap;
    loadMore?: (columnId: string) => void;
    onColumnClick?: (e: React.MouseEvent<HTMLDivElement>, column: BoardItem) => void;
    onCardClick?: (e: React.MouseEvent<HTMLDivElement>, card: BoardItem) => void;
    renderColumnHeader?: (column: BoardItem) => React.ReactNode;
    renderColumnFooter?: (column: BoardItem) => React.ReactNode;
    renderSkeletonCard?: BoardProps["renderSkeletonCard"];
    renderGap?: (column: BoardItem) => React.ReactNode;
    renderColumnWrapper: (column: BoardItem, { children, className, style, ref, }: {
        children: React.ReactNode;
        className?: string;
        style?: React.CSSProperties;
        ref?: React.RefObject<HTMLDivElement>;
    }) => React.ReactNode;
    columnWrapperStyle?: (column: BoardItem) => React.CSSProperties;
    columnHeaderStyle?: (column: BoardItem) => React.CSSProperties;
    columnStyle?: (column: BoardItem) => React.CSSProperties;
    columnClassName?: (column: BoardItem) => string;
    onCardDndStateChange?: (info: DndState) => void;
    onColumnDndStateChange?: (info: DndState) => void;
    columnWrapperClassName?: (column: BoardItem) => string;
    columnHeaderClassName?: (column: BoardItem) => string;
    columnListContentStyle?: (column: BoardItem) => React.CSSProperties;
    renderCardDragIndicator?: (card: BoardItem, info: any) => React.ReactNode;
    renderColumnDragIndicator?: (column: BoardItem, info: any) => React.ReactNode;
    renderCardDragPreview?: (card: BoardItem, info: any) => React.ReactNode;
    renderColumnDragPreview?: (column: BoardItem, info: any) => React.ReactNode;
    columnListContentClassName?: (column: BoardItem) => string;
    renderListFooter?: (column: BoardItem) => React.ReactNode;
    renderColumnAdder?: (column: BoardItem) => React.ReactNode;
    items: BoardItem[];
    cardWrapperStyle?: (card: BoardItem, column: BoardItem) => React.CSSProperties;
    cardWrapperClassName?: string;
    onScroll?: (e: ScrollEvent, column: BoardItem) => void;
}
declare const Column: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default Column;
