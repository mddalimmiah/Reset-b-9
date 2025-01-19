
// export default function Todo({task, isDone}){
//     // task="ami ghumabo"
//     return (
//         <li>Task: {task}</li>
//     )
// }

// condition rendering option 1
// export default function Todo({task, isDone}){
   
//   if(isDone===true){
//     return <li>Finished: {task}</li>
//   }
//   else{
//     return <li>work on process: {task}</li>
//   }
// }

// condition rendering option-2
// export default function Todo({task, isDone}){
   
//   if(isDone){
//     return <li>Finished: {task}</li>
//   }
//   return <li>work on process: {task}</li>
// }


// condition rendering option-3 ternary operator
// export default function Todo({task, isDone}){
   
//     return (
//                 <li> {isDone? 'finished' : 'work on'} : Task: {task}</li>
//             )

// }


// conditional rendering option-4 && and operator:
// export default function Todo({task, isDone}){
   
//     return (
//         <li>Task: {task} {isDone && ': Done'}</li>
//     )
// }

// // conditional rendering option-5 || or  operator:
// export default function Todo({task, isDone}){
   
//     return (
//         <li>Task: {task} {isDone || ': Do It'}</li>
//     )
//     // isDone jodi sotto na hoy tahle Do it message dibe
// }

// condition rendering option-6
export default function Todo({task, isDone}){
   let listItem;
  if(isDone===true){
   listItem= <li>Finished: {task}</li>
  }
  else{
   listItem= <li>work on process: {task}</li>
  }
  return listItem;
}