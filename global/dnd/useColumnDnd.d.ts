import { BoardItem, DndState } from '../../components/types';

export type TColumnState = {
    type: "is-card-over";
    isOverChildCard: boolean;
    dragging: DOMRect;
} | {
    type: "is-column-over";
} | {
    type: "idle";
} | {
    type: "is-dragging";
};
export declare const useColumnDnd: (data: BoardItem, index: number, items: BoardItem[], onColumnDndStateChange?: (info: DndState) => void) => {
    headerRef: import('react').MutableRefObject<HTMLDivElement>;
    outerFullHeightRef: import('react').MutableRefObject<HTMLDivElement>;
    innerRef: import('react').MutableRefObject<HTMLDivElement>;
    state: TColumnState;
    cardOverShadowCount: number;
    totalTasksCount: number;
};
