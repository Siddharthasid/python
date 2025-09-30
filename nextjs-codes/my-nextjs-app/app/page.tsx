"use client";

import {useState} from "react";
import Image from "next/image";
import { Trash } from 'lucide-react';


export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMainTask((prev) => [...prev, {title, description}]);
    setTitle("");
    setDescription("");
  }

  let renderLask = <h2>No Task Available.</h2>

  const handleDelete = (index) => {
    const newMainTask = [...mainTask];
    newMainTask.splice(index, 1);
    setMainTask(newMainTask);
  }

  return (
    <>
    <h1 className="bg-black text-white text-5xl p-5 font-bold text-center">Siddhartha's ToDo List</h1>

    <form onSubmit={handleSubmit}>
      <input type="text" className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2" placeholder="Enter title here..." value={title} onChange={(e) => {setTitle(e.target.value)}} />
      <input type="text" className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2" placeholder="Enter description here..." value={description} onChange={(e) => {setDescription(e.target.value)}} />
      <button className="bg-black text-white m-5 py-3 px-2 text-2xl font-bold rounded">Add Task</button>
    </form>

    <hr />
    <div className="p-8 bg-slate-200">
      {!mainTask.length > 0 && renderLask}
      {mainTask.length > 0  && mainTask.map((task, index) => {
        return <div key={index} className="flex justify-between">
          <div className="flex flex-col justify-center items-start gap-2 mb-5">
          <h3 className="text-2xl font-bold">Title: {task.title}</h3>
          <h4 className="text-xl">Description: {task.description}</h4>
          </div>
          <div>
            <button className="bg-transparent cursor-pointer hover:text-red-500" onClick={() => {handleDelete(index)}}>
              <Trash />
            </button>
            </div>
        </div>
      })}
    </div>
    </>
  );
}
