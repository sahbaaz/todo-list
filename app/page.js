"use client"
import React, { useState } from "react";

const Page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler =(e)=>{
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler =(i) =>{
    const copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;
  if(mainTask.length > 0){
    renderTask = mainTask.map((t, i) => {
      return  (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-3xl text-center '>
        Sahbaz's todo-list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2 rounded-md'
          placeholder="Enter task here"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
        />
        <input
          type="text"
          className='text-2xl border-zinc-800  rounded-md border-2 m-8 px-4 py-2'
          placeholder="Enter description here"
          value={desc} 
          onChange={(e)=>{
            setdesc(e.target.value)
          }}
        />
        <button className='bg-black text-2xl text-white px-4 py-3 m-5 rounded-md '>
          Add task
        </button>
      </form>
      <hr />
      <div className='p-8 bg-slate-300 rounded-xl' >
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default Page;
