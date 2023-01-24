import React, { FC } from "react";
import DraggableComponents from "./DraggableComponents"

// export const MovableItem: FC = () => {
//   return <div className="movable-item">We will move this item</div>;

// };

export const FirstColumn = (props: any) => {
  console.log("column",props);

  
  return (
    <div className="column First-column">
    <div className="title"> To Do's</div>
    <DraggableComponents list ={props.list} status =  {"available"} />
    </div>
  );
};

export const SecondColumn = (props:any) => {
  console.log("column",props);
  console.log("c++++++++++",props.status);
  return (
    <div className="column second-column">
      <div className="title"> In Progress</div>
      <DraggableComponents className = "movable-item" list ={props.list} status = {"assigned"} />
    </div>
  );
};

export const ThirdColumn = (props:any) => {
  return (
    <div className="column Third-column">
      <div className="title"> Done </div>
      <DraggableComponents className = "movable-item" list ={props.list} status = {"completed"} />
    </div>
  );
};

