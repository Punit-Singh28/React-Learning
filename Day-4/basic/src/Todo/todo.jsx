import React from "react";
import "../App";
import { Children, useState } from 'react';

import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";

export const Todo = () => {
  return (
    <>
    <TodoInput/>
    <TodoList/>
    </>
  );
};
