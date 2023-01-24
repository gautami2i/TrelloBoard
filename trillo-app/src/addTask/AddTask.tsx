import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import v4 from "react-uuid";
import { useDispatch } from "react-redux";
import { addTask } from "../store/Reducer";
import { useForm } from "react-hook-form";

const InputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } : any = useForm();
  const [count, setCount] = useState(1);
  const dispatch: any = useDispatch();
  const onSubmit = (data: any) => {
    console.log(data);
    var formData: any = {
      uuid: v4(),
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
    };
    console.log("formdata",formData);
    dispatch(addTask(formData));
  };

  function Counter() {
    setCount(count + 1);
    return count;
  }

  return (
    <div className="inputContainer">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>task title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your id here"
            {...register("title", { required: true, maxLength: 10 })}
            autoFocus
          />
          {errors.id && <p className="warn">Please check your id</p>}
          <Form.Label>assign to</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name here"
            {...register("subtitle", {
              required: true,
              maxLength: 25,
              pattern: /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/,
            })}
          />
          {errors.name && <p className="warn">Please check your Name</p>}
          <Form.Label>description</Form.Label>

          <Form.Control
            type="text Area"
            placeholder="Enter description"
            {...register("description", {
              required: true,
              maxLength: 25,
              pattern: /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/,
            })}
          />
          {errors.name && <p className="warn">Please check your Name</p>}

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );

};

export default InputForm;
