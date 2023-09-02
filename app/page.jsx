"use client"
import { useState } from "react"


export default function Home() {
   const [todo,setTodo]= useState("");
   const [desc , setdec] = useState("");
   const [mainTask , setmainTask] = useState([]);

   const deleteHandler = (i)=>{
         
            //using filter method
            //  const newTask = mainTask.filter((t,index)=>{
            //    return index!==i;
            //  })
            //  setmainTask(newTask);

            ///using splice method
            const newTask = [...mainTask];
            newTask.splice(i,1);
            setmainTask(newTask);
         
   }

   let renderTask = <h2>NO Task Available</h2>
  
   if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
    return (
        <li key={i} className="flex items-center justify-between pb-4" >
        <div className="flex justify-between mb-5 w-2/3  " >
            <h5 className="text-2xl font-semibold" >{t.todo}</h5>
            <h6 className="text-lg font-semibold" >{t.desc}</h6>
        </div>
        <button className="bg-red-500 px-4 py-2 rounded text-white text-2xl " onClick={()=>{deleteHandler(i)}} >Delete</button>
    </li>);
   })
}
   const submitHandler = (e)=>{
     e.preventDefault();
     setmainTask([...mainTask, {todo,desc}]);
     console.log(mainTask);
     console.log(`${todo} ,  ${desc}`);
     setTodo("");
     setdec("");
   }
  return (
    <>
    <h1 className="text-white bg-black p-5 text-4xl text-center font-bold " >TODO</h1>
    <form action="" className=" flex content-center justify-evenly  " onSubmit={submitHandler}>
        <input type="text" className="text-2xl  border-zinc-800 border-4 m-4 px-4 py-2 " placeholder="Enter a Todo " value={todo} onChange={(e)=>{setTodo(e.target.value)}}  />
        <input type="text" className=" text-2xl border-zinc-800 border-4 m-4 px-4 py-2 " placeholder="Enter a Description  "  value={desc} onChange={(e)=>{setdec(e.target.value)}} />
        <button className=" bg-black  px-4 py-3 text-2xl text-white m-2 rounded "  >Add task </button>
    </form> 
    <hr />
    <div className=" p-8 bg-slate-200 " >
        <ul>
            {renderTask}
        </ul>
    </div>
    </>
  )
}
