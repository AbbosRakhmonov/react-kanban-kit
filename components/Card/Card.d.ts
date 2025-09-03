import { default as React } from 'react';
import { BoardItem, DndState } from '../types';

export declare const CardShadow: React.MemoExoticComponent<({ height, customIndicator, }: {
    height: number;
    customIndicator?: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element>;
interface Props {
    render: (props: {
        data: BoardItem;
        column: BoardItem;
        index: number;
        isDraggable: boolean;
    }) => React.ReactNode;
    data: BoardItem;
    column: BoardItem;
    index: number;
    isDraggable: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement>, card: BoardItem) => void;
    cardsGap?: number;
    renderGap?: (column: BoardItem) => React.ReactNode;
    onCardDndStateChange?: (info: DndState) => void;
    renderCardDragIndicator?: (card: BoardItem, info: any) => React.ReactNode;
    renderCardDragPreview?: (card: BoardItem, info: any) => React.ReactNode;
}
declare const Card: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default Card;
