import { BoardProps } from "@/components";

export const getSharedProps = (props: BoardProps) => {
  const {
    viewOnly = false,
    virtualization = true,
    cardsGap = 8,
    allowColumnAdder = true,
    allowListFooter,
    allowColumnDrag = true,
    freezeFirstColumn = false,
    freezeLastColumn = false,
  } = props;
  return {
    viewOnly,
    virtualization,
    cardsGap,
    allowColumnAdder,
    allowListFooter,
    allowColumnDrag,
    freezeFirstColumn,
    freezeLastColumn,
  };
};
