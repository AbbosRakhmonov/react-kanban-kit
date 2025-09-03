import { BoardData, BoardItem, DropParams } from '../../components';

export declare const handleCardDrop: ({ source, location, columns, dataSource, onCardMove, onColumnMove, }: DropParams) => void;
export declare const dropColumnHandler: (drop: {
    columnId: string;
    position: number;
}, dataSource: BoardData) => {
    [key: string]: BoardItem<any>;
    root: BoardItem<any>;
};
export declare const dropHandler: (drop: {
    cardId: string;
    fromColumnId: string;
    toColumnId: string;
    taskAbove: string | null;
    taskBelow: string | null;
}, dataSource: BoardData, updateDroppedItem?: (targetColumn: BoardItem, droppedItem: any) => any, updateDestinationColumn?: (targetColumn: BoardItem) => any, updateSourceColumn?: (sourceColumn: BoardItem) => any) => {
    [key: string]: BoardItem<any>;
    root: BoardItem<any>;
};
