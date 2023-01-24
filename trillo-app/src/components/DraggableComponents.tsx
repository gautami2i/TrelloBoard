import { useState } from "react";
import { Draggable, DraggableProvided, Droppable } from "react-beautiful-dnd";



const DraggableComponents = (props: any) => {
  console.log("list data", props.list);

  return (
    <Droppable droppableId={props.status}>
      {(provided) => {
        return (
          <div ref={provided.innerRef}>
            {
              props.list[props.status].map((item: any, index: any) => (
                <Draggable draggableId={item.uuid + ""} key={item.uuid} index={index}>
                  {(provided: DraggableProvided) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="movable-item">
                          <div>{item.title}</div>
                          <div> {item.subtitle}</div>
                          <div> {item.description}</div>
                        </div>

                      </div>
                    );
                  }}
                </Draggable>
              ))
            }
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default DraggableComponents;






























// const data = {
//   available: [
//     {
//       id: 1,
//       uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
//       title: "What is Lorem Ipsum?",
//       subtitle: "Lorem Ipsum is simply dummy",
//       updatedAt: "6 days ago",
//     },
//     {
//       id: 2,
//       uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a448",
//       title: "Why do we use it?",
//       subtitle: "The point of using at its layout",
//       updatedAt: "2 days ago",
//     },
//     {
//       id: 3,
//       uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a449",
//       title: "Where does it come from?",
//       subtitle: "Contrary to popular belief, Lorem Ipsum is not simply",
//       updatedAt: "3 days ago",
//     },
//   ],

//   assigned: [
//     {
//       id: 5,
//       uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a450",
//       title: "Where can I get some?",
//       subtitle: "There are many variations",
//       updatedAt: "6 days ago",
//     },
//     {
//       id: 6,
//       uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a451",
//       title: "Morbi sagittis tellus a efficitur",
//       subtitle: "Etiam mollis eros eget mi.",
//       updatedAt: "2 days ago",
//     },
//   ],
//   completed: [
//     {
//       id: 7,
//       uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a452",
//       title: "Where can I get some?",
//       subtitle: "There are many variations",
//       updatedAt: "9 days ago",
//     },
//     {
//       id: 8,
//       uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a453",
//       title: "Morbi sagittis tellus a efficitur",
//       subtitle: "Etiam mollis eros eget mi.",
//       updatedAt: "7 days ago",
//     },
//   ],
// };