import { default as React } from 'react';
import { BoardItem } from '../types';

interface Props {
    renderColumnHeader?: (column: BoardItem) => React.ReactNode;
    columnHeaderStyle?: (column: BoardItem) => React.CSSProperties;
    columnHeaderClassName?: string;
    data: BoardItem;
}
declare const ColumnHeader: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default ColumnHeader;
