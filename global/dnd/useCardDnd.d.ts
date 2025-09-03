import { BoardItem, DndState } from '../../components/types';
import { Edge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';

export type TaskCardState = {
    type: "idle";
} | {
    type: "is-dragging";
} | {
    type: "is-dragging-and-left-self";
} | {
    type: "is-over";
    dragging: DOMRect;
    closestEdge: Edge;
} | {
    type: "preview";
    container: HTMLElement;
    dragging: DOMRect;
};
export declare const useCardDnd: (data: BoardItem, column: BoardItem, index: number, isDraggable: boolean, onCardDndStateChange?: (info: DndState) => void) => {
    outerRef: import('react').MutableRefObject<HTMLDivElement>;
    innerRef: import('react').MutableRefObject<HTMLDivElement>;
    state: TaskCardState;
};
