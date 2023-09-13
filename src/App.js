import './App.css'
import Navbar from './Ui/Navbar';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Ui/Home"
import FormMain from './CreateNew/FormMain';
import { useState } from 'react';
import OptionList from './CreateNew/OptionList';




function App() {
  const [optionList,setOptionList] =useState([])
  let addList = (optionText)=>{
    if(optionText!=='')
    setOptionList([...optionList,optionText])
    setOptionList([...optionList,optionText])
  } 

 const deleteListItem =(key)=>{
  let newOption = [...optionList];
  newOption.splice(key,1)
  setOptionList([...newOption])
 }
 
  
  return (
   
  
   <BrowserRouter>
   <Navbar/>
  
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/CreateNewQuiz' element={<FormMain addList={addList}/>} />
   </Routes>
   {optionList.map((listItem,i)=>{
    return(
      <OptionList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
    )
   
   })}
      
   </BrowserRouter>
   
  );
  }

export default App;
