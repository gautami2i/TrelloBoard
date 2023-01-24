import "./App.scss";
import Navbar from "./navbar/Navbar";
import Routers from "./components/Routers";
import Trello from "./components/TrelloComponent";

const App = () => {

  return (
    <div className="wrapper">
      <Navbar />
      <Routers/>
    </div>
  );
};
export default App;

// const App = () => {
//   const itemsNormal = {
//     available: [
//       {
//         id: 1,
//         uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
//         title: "What is Lorem Ipsum?",
//         subtitle: "Lorem Ipsum is simply dummy",
//         updatedAt: "6 days ago",
//       },
//       {
//         id: 2,
//         uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a448",
//         title: "Why do we use it?",
//         subtitle: "The point of using at its layout",
//         updatedAt: "2 days ago",
//       },
//       {
//         id: 3,
//         uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a449",
//         title: "Where does it come from?",
//         subtitle: "Contrary to popular belief, Lorem Ipsum is not simply",
//         updatedAt: "3 days ago",
//       },
//     ],

//     assigned: [
//       {
//         id: 5,
//         uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a450",
//         title: "Where can I get some?",
//         subtitle: "There are many variations",
//         updatedAt: "6 days ago",
//       },
//       {
//         id: 6,
//         uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a451",
//         title: "Morbi sagittis tellus a efficitur",
//         subtitle: "Etiam mollis eros eget mi.",
//         updatedAt: "2 days ago",
//       },
//     ],
//       completed: [
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
//   };

//   const [items, setItems] = useState(itemsNormal);

//   const removeFromList = (list: any, index: any) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(index, 1);
//     return [removed, result];
//   };

//   const addToList = (list: any, index: any, element: any) => {
//     const result = Array.from(list);
//     result.splice(index, 0, element);
//     return result;
//   };

//   const onDragEnd = (result: any) => {
//     if (!result.destination) {
//       console.log(result);
//       return;
//     }
//     const listCopy: any = { ...items };
//     const sourceList = listCopy[result.source.droppableId];
//     const [removedElement, newSourceList] = removeFromList(
//       sourceList,
//       result.source.index
//     );
//     listCopy[result.source.droppableId] = newSourceList;

//     const destinationList = listCopy[result.destination.droppableId];
//     listCopy[result.destination.droppableId] = addToList(
//       destinationList,
//       result.destination.index,
//       removedElement
//     );
//     setItems(listCopy);
//   };

//   return (
//     <>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <div className="flex p-12">
//           <Row>
//             <Col>
//               <List title="To DO's" onDragEnd={onDragEnd} name="available">
//                 {items.available.map((item, index) => (
//                   <Draggable
//                     key={item.id}
//                     draggableId={item.id + ""}
//                     index={index}
//                   >
//                     {(
//                       provided: DraggableProvided | any,
//                       snapshot: DraggableStateSnapshot
//                     ) => (
//                       <div>
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                         >
//                           <Card data={item} />
//                         </div>
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//               </List>
//             </Col>
//             <Col>
//               <List title="In Progress" onDragEnd={onDragEnd} name="assigned">
//                 {items.assigned.map((item, index) => (
//                   <Draggable
//                     draggableId={item.uuid}
//                     index={index}
//                     key={item.id}
//                   >
//                     {(provided, snapshot) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                       >
//                         <Card data={item} />
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//               </List>
//             </Col>
//             <Col>
//             <List title="Done" onDragEnd={onDragEnd} name="completed">
//                 {items.completed.map((item, index) => (
//                   <Draggable
//                     draggableId={item.uuid}
//                     index={index}
//                     key={item.id}
//                   >
//                     {(provided, snapshot) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                       >
//                         <Card data={item} />
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//               </List>
//             </Col>
//           </Row>
//         </div>
//       </DragDropContext>
//     </>
//   );
// };