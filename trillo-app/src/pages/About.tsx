import React, { FC } from 'react';
import { useSelector, useDispatch } from "react-redux";

const About = () => {
    const list = useSelector((state: any) => state.task.value);
    return (
    list.available.map((items: any) => {
        return (
        <div>
            <div>{items.title}</div>
        </div>
        )

    })

    )

}
export default About;
