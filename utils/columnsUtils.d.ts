import { BoardData, BoardItem } from '../components';

export declare const getColumnsFromDataSource: (dataSource: BoardData) => BoardItem<any>[];
export declare const getColumnChildren: (column: BoardItem, dataSource: BoardData) => BoardItem<any>[];
export declare const getHeaderHeight: (header: HTMLDivElement) => number;
