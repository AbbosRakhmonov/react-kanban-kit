import { TaskCardState } from "@/global/dnd/useCardDnd";
import { TColumnState } from "@/global/dnd/useColumnDnd";
import { CSSProperties, ReactNode } from "react";

export interface DndState<T = any> {
  state: TaskCardState | TColumnState;
  column?: BoardItem<T>;
  card?: BoardItem<T>;
}

export interface ScrollEvent {
  target: {
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
  };
}

export type CardRenderProps<T = any> = {
  data: BoardItem<T>;
  column: BoardItem<T>;
  index: number;
  isDraggable: boolean;
};

export type ConfigMap<T = any> = {
  [type: string]: {
    render: (props: CardRenderProps<T>) => React.ReactNode;
    isDraggable?: boolean;
  };
};

export interface BoardItem<T = any> {
  id: string;
  title: string;
  parentId: string | null;
  children: string[];
  content?: T;
  type?: keyof ConfigMap<T>;
  totalItems?: number;
  // totalChildrenCount is the total number of children in the column
  totalChildrenCount: number;
  // totalItemsCount is the total number of items (real content) in the column
  totalItemsCount?: number;
  isDraggable?: boolean;
}

export interface BoardData<T=any> {
  root: BoardItem<T>;
  [key: string]: BoardItem<T>;
}

export interface BoardProps<T = any> {
  dataSource: BoardData<T>;
  configMap: ConfigMap<T>;
  viewOnly?: boolean;
  loadMore?: (groupsId: string) => void;
  renderSkeletonCard?: ({
    index,
    column,
  }: {
    index: number;
    column: BoardItem<T>;
  }) => ReactNode;
  renderColumnHeader?: (column: BoardItem<T>) => ReactNode;
  renderCardDragIndicator?: (card: BoardItem<T>, info: any) => ReactNode;
  renderCardDragPreview?: (card: BoardItem<T>, info: any) => ReactNode;
  // renderColumnDragIndicator?: (column: BoardItem, info: any) => ReactNode;
  // renderColumnDragPreview?: (column: BoardItem, info: any) => ReactNode;

  renderListFooter?: (column: BoardItem<T>) => ReactNode;
  allowListFooter?: (column: BoardItem<T>) => boolean;

  renderColumnAdder?: () => ReactNode;
  allowColumnAdder?: boolean;

  renderColumnWrapper?: (
    column: BoardItem<T>,
    {
      children,
      className,
      style,
    }: { children: ReactNode; className?: string; style?: CSSProperties }
  ) => ReactNode;
  columnWrapperStyle?: (column: BoardItem<T>  ) => CSSProperties;
  columnHeaderStyle?: (column: BoardItem<T>) => CSSProperties;
  columnListContentStyle?: (column: BoardItem<T>) => CSSProperties;
  columnListContentClassName?: (column: BoardItem<T>) => string;
  columnWrapperClassName?: (column: BoardItem<T>) => string;
  columnHeaderClassName?: (column: BoardItem<T>) => string;
  columnClassName?: (column: BoardItem<T>) => string;
  columnStyle?: (column: BoardItem<T>) => CSSProperties;
  rootStyle?: CSSProperties;
  rootClassName?: string;
  cardWrapperStyle?: (card: BoardItem<T>, column: BoardItem<T>) => CSSProperties;
  cardWrapperClassName?: string;
  virtualization?: boolean;
  cardsGap?: number;
  // renderGap?: (column: BoardItem) => ReactNode;
  onScroll?: (e: ScrollEvent, column: BoardItem<T>) => void;
  onColumnMove?: ({
    columnId,
    fromIndex,
    toIndex,
  }: {
    columnId: string;
    fromIndex: number;
    toIndex: number;
  }) => void;
  onCardMove?: ({
    cardId,
    fromColumnId,
    toColumnId,
    taskAbove,
    taskBelow,
    position,
  }: {
    cardId: string;
    fromColumnId: string;
    toColumnId: string;
    taskAbove: string | null;
    taskBelow: string | null;
    position: number;
  }) => void;
  renderColumnFooter?: (column: BoardItem<T>) => ReactNode;
  onColumnClick?: (
    e: React.MouseEvent<HTMLDivElement>,
    column: BoardItem<T>
  ) => void;
  onCardClick?: (e: React.MouseEvent<HTMLDivElement>, card: BoardItem<T>) => void;
  onCardDndStateChange?: (info: DndState) => void;
  onColumnDndStateChange?: (info: DndState) => void;
}

export interface DropParams<T = any> {
  source: {
    id: string;
    data: any;
  };
  location: {
    current: {
      dropTargets: Array<{
        data: any;
      }>;
    };
  };
  columns: BoardItem<T>[];
  dataSource: BoardData<T>;
  onCardMove?: BoardProps<T>["onCardMove"];
  onColumnMove?: BoardProps<T>["onColumnMove"];
}
