import { DragDropContext } from "react-beautiful-dnd";
import { FirstColumn,SecondColumn,ThirdColumn} from "../components/MovableItems";
import Navbar from "../navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { updateTask } from "../store/Reducer";
import InputForm from "../addTask/AddTask";

const Trello = () => {
    const list = useSelector((state: any) => state.task.value);
  
    console.log("useSelector in app ", list);
  
    const dispatch = useDispatch();
  
    const handleOnDragEnd = (result: any) => {
      console.log("drag items", result);
      if (!result.destination) {
        return;
      }
      const removeFromList = (list: any, index: any) => {
        const result = Array.from(list);
        const [removed] = result.splice(index, 1);
        return [removed, result];
      };
  
      const addToList = (list: any, index: any, element: any) => {
        const result = Array.from(list);
        result.splice(index, 0, element);
        return result;
      };
      const listCopy: any = { ...list };
      const sourceList = listCopy[result.source.droppableId];
      const [removedElement, newSourceList] = removeFromList(
        sourceList,
        result.source.index
      );
      listCopy[result.source.droppableId] = newSourceList;
  
      const destinationList = listCopy[result.destination.droppableId];
      listCopy[result.destination.droppableId] = addToList(
        destinationList,
        result.destination.index,
        removedElement
      );
      localStorage.setItem("tasks", JSON.stringify(listCopy));
      dispatch(updateTask(listCopy));
    };
    return (
      <div className="wrapper">
        {/* <Navbar /> */}
        <InputForm />
        <div className="container">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <FirstColumn list={list} status={"available"} />
            <SecondColumn list={list} status={"assigned"} />
            <ThirdColumn list={list} status={"completed"} />
          </DragDropContext>
        </div>
      </div>
    );
  };
  export default Trello;