import { BoardProps } from '../components';

export declare const useKanbanContext: () => Partial<BoardProps<any>>;
export declare const KanbanProvider: ({ children, ...props }: Partial<BoardProps> & {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
