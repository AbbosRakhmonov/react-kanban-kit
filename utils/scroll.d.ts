import { BoardItem, ScrollEvent } from '../components';

export declare const handleScroll: (e: React.UIEvent<HTMLDivElement> | number, virtualization: boolean, onScroll: (e: ScrollEvent, column: BoardItem) => void, column: BoardItem) => void;
