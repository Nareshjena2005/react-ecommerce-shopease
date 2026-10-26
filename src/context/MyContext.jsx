import { createContext, useState } from "react";

export const MyStore = createContext();
export const ConstextProvider = ({children})=>{
  const [iteamData,setIteamData]=useState([]);
  const [singalData,setSingalData]=useState(null);
  const[cardIteam,setCardIteam]=useState([]);
  // Increment  code
const addIteam = ((id)=>{
  setCardIteam((prev)=>{
    return prev.map((val)=>{
      return val.id===id?{...val,quanity:val.quanity+1}:val
    })
  })
})
// Decrement code
const decrement = ((id)=>{
   setCardIteam((prev)=>{
    return prev.map((val)=>{
      return id===val.id?{...val,quanity:val.quanity-1}:val
    })
          .filter((item) => item.quanity > 0)

   })
})
// removecard
// const removeButton = (id) => {
//   setCardIteam((prev) => {
//     return prev.filter((item) => item.id !== id);
//   });
// };
const removeButton = (id) => {
  setCardIteam((prev) => {
    return prev.filter((val) => {
      return val.id !== id;
    });
  });
};
  return <MyStore.Provider
  value={{
    iteamData,
    setIteamData,
    singalData,
    setSingalData,
    cardIteam,
    setCardIteam,
    addIteam,
    decrement,
    removeButton
  }}
  >{children}</MyStore.Provider>
}