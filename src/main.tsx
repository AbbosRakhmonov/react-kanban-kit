import ReactDOM from "react-dom/client";
import { Kanban } from "./";
import { mockData } from "./utils/mocks/data";
import CardSkeleton from "./components/CardSkeleton";

const App = () => {
  return (
    <div style={{ width: "100%", height: "86dvh" }}>
      <Kanban
        viewOnly={false}
        allowColumnDrag={true} // Set to false to disable column dragging
        // freezeFirstColumn={true} // Freeze the first column
        // freezeLastColumn={true} // Freeze the last column
        onCardClick={(e, card) => {
          console.log();
        }}
        // renderCardDragPreview={(card, info) => {
        //   return (
        //     <div
        //       style={{
        //         height: "92px",
        //         backgroundColor: "red",
        //         width: "233px",
        //       }}
        //     >
        //       Preview of {card.title}
        //     </div>
        //   );
        // }}
        // renderCardDragIndicator={(card, info) => {
        //   return (
        //     <div
        //       style={{
        //         height: 0,
        //         borderRadius: "20px",
        //         border: "2px dashed red",
        //       }}
        //     ></div>
        //   );
        // }}
        // renderColumnFooter={(column) => (
        //   <div>
        //     {column.title} have total as {column?.totalChildrenCount}
        //   </div>
        // )}
        // renderColumnWrapper={(column, { children, className, style }) => (
        //   <div
        //     style={{
        //       ...style,
        //       backgroundColor: "red",
        //       ...(collapsed ? { width: "100px", minWidth: "100px" } : {}),
        //     }}
        //     className={`${className} hello there`}
        //   >
        //     {collapsed ? column?.title : children}
        //   </div>
        // )}
        // renderColumnHeader={(column) => (
        //   <div style={{ padding: "30px" }}>
        //     {column.title} have total as {column?.totalChildrenCount}
        //   </div>
        // )}
        // columnHeaderStyle={(column) => ({
        //   backgroundColor: "red",
        //   padding: "10px",
        // })}
        // columnWrapperStyle={(column) => ({
        //   backgroundColor: "green",
        //   padding: "10px",
        // })}

        // renderSkeletonCard={({ index, column }) => (
        //   <div>
        //     Loading {index} {column.title} ...
        //   </div>
        // )}

        // Custom skeleton examples:
        renderSkeletonCard={({ index, column }) => (
          <CardSkeleton animationType="shimmer" />
        )}
        // renderSkeletonCard={({ index, column }) => (
        //   <CardSkeleton
        //     variant="compact"
        //     animationType="pulse"
        //   />
        // )}
        // onScroll={(e, column) => {
        //   console.log(e, column);
        // }}
        // columnStyle={(column) => ({
        //   backgroundColor: dragOverColumn === column.id ? "red" : "blue",
        // })}
        onCardMove={(event) => {
          console.log({ event });
        }}
        onColumnMove={(event) => {
          console.log("Column moved:", event);
        }}
        renderColumnDragIndicator={(column, info) => (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              backgroundColor: "#007bff",
              borderRadius: "2px",
              zIndex: 10,
              pointerEvents: "none",
              boxShadow: "0 0 8px rgba(0, 123, 255, 0.5)",
            }}
          />
        )}
        renderColumnDragPreview={(column, info) => (
          <div
            style={{
              background: "#fff",
              padding: "12px",
              borderRadius: "8px",
              border: "2px solid #007bff",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              minWidth: "200px",
              opacity: 0.9,
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
              {column.title}
            </div>
            <div style={{ fontSize: "12px", color: "#666" }}>
              {column.totalChildrenCount || 0} tasks
            </div>
          </div>
        )}
        allowColumnAdder={true}
        renderColumnAdder={() => <div>Add new Column</div>}
        renderListFooter={(column) => <div>Add new one</div>}
        allowListFooter={(column) => true}
        rootClassName="check"
        dataSource={mockData}
        cardsGap={6}
        // cardWrapperStyle={(card, col) => {
        //   console.log({ col, card });
        //   return {
        //     backgroundColor: "red",
        //     padding: "10px",
        //   };
        // }}
        cardWrapperClassName="card-hazem"
        // loadMore={(columnId) => {
        //   console.log("loadMore", columnId);
        // }}
        // onCardDndStateChange={(info) => {
        //   console.log({ info });
        //   if (info.state.type === "idle") {
        //     setDragOverColumn(info.column?.id);
        //   }
        // }}
        // onColumnDndStateChange={(info) => {
        //   if (info.state.type === "is-card-over") {
        //     setDragOverColumn(info.column?.id);
        //   } else {
        //     setDragOverColumn(null);
        //   }
        // }}
        virtualization={true} // Set to false to disable virtualization and use normal map instead
        configMap={{
          card: {
            render: (props) => (
              <div
                style={{
                  background: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  height: "70px",
                }}
              >
                Card {props.data.title}
              </div>
            ),
            isDraggable: true,
          },
          // divider: {
          //   render: (props) => (
          //     <div
          //       style={{
          //         width: "100%",
          //         height: "10px",
          //         backgroundColor: "green",
          //       }}
          //     ></div>
          //   ),
          //   isDraggable: true,
          // },
          cardLoading: {
            render: (props) => <div>Card Loading</div>,
            isDraggable: true,
          },
          footer: {
            render: (props) => {
              return <div>Add Task</div>;
            },
            isDraggable: false,
          },
        }}
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
