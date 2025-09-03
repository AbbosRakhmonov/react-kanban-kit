import { BoardProps } from '../components';

export declare const getSharedProps: (props: BoardProps) => {
    viewOnly: boolean;
    virtualization: boolean;
    cardsGap: number;
    allowColumnAdder: boolean;
    allowListFooter: (column: import('../components').BoardItem<any>) => boolean;
};
