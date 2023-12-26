import logo from './logo.svg';
import laptop from './download (1).jpg'
import bike from'./download (4).jpg'
import onbulb from'./istockphoto-185206958-612x612.jpg'
import offbulb from"./istockphoto-1150776990-612x612.jpg"
import './App.css';
import { useState } from 'react';
function App() {


const [textt,settextt]=useState("QAZI")
function reversetext()
{

const reverseText=textt.split('').reverse().join('')
settextt(reverseText)
 console.log(reverseText)
}
//    let namee="Contour"
//    function reversetext()
//    {
  
// namee=namee.split('').reverse().join('') //ye react pr nh larha
// console.log(namee)

//    }

// let Namee="Contour"

  const meme="java script "
  const text="E6"

  const car={
    name:'CIVIC',
    model:2023,
    color:'black'
  }
  const language=[" java script"," python"," C#"," Assembly language"]
  const cars=["Sportage","CHR","FORTUNER","VIGO","PARADO","Audi"]
  const carlist=[
{name:"Audi",model:1986,color:"Gray"},
{name:"Mehran",model:2000,color:"black"},
{name:"Civic",model:2022,color:"white"},
{name:"Corolla",model:1998,color:"blue"},
{name:"BMW",model:2012,color:"golden"}
]

const complex = [
  {company: 'CONTOUR ', jobs: ['Javascript' ,'React',"Reactnative"]},
   {company: 'EXPERTIZO', jobs: ['AngularJs', 'Ionic',"python"]},
   {company: 'ELEXSOFT', jobs: ['Oop', 'Java',"DSA"]}
  ] //Show these in a Table

  const list = [{name: "Hello World 1"},
   {name: "Hello World 2"}, 
   {name: "Hello World 3"}] //Show these in seperate tags

   const data = ['We', 'are', 'United'] //Show these in seperate tags


   const [show,setshow]=useState(true)

   const[showw,setshoww]=useState(true)

   const[TEXT,newTEXT]=useState("HELLO WORLD")

   const[Reverse,newReverse]=useState("HELLO PAKISTAN")
function Viceversa(){
  const reverse=Reverse.split("").reverse().join("")
  newReverse(reverse)

}

const [List,setList]=useState([])//ye list ke he
const[TExt,setTExt]=useState("")//ye input ke he

function Additem(){
  //list me input ke value push krani he
  //list mojood he or input mojood nh he
  const copylist=[...List] //direct state ko nh cherna jbhi hmne copy bnakr kra
  copylist.push(TExt)
  setList(copylist)// taake update hojae list ka state 
setTExt("")
}
function updattext(e){
const value =e.target.value// ye isliye kra ke opr wale function me chahiye jbhi zarori nh state bnae tw print be krae ose jbhi iski alag state bnae hmne 
setTExt(value)
}
function deleteitem(index)
{
const copylist=[...List]
copylist.splice(index,1)
setList(copylist)
}

function edititem(index)
{

  const copylist=[...List]
  const get=copylist.slice(index)

setList(copylist)
setTExt(get)
  // const copylist=[...List]
  // const get=copylist.slice(index,1)
  // setList(copylist)

  // setTExt(get)

}
function updateitem(){
 const receive= setTExt(TExt)
setList(receive)
}
const[update,setupdate]=useState(true)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />



        {<input  value={TExt} onChange={updattext} placeholder='write here' type='text'/>}

      

{update?<button onClick={Additem}>add</button>:<button onClick={()=>setupdate(!update)}>Update</button>}
{update?<button onClick={Additem}>add</button>:<button onClick={()=>updateitem()}>Update</button>}



<ul>
{List.map (function(item,index)
{
return <li>{item} <button onClick={()=>deleteitem(index)}>delete</button><button onClick={()=>edititem(index,setupdate(!update))}>EDit</button> </li>
})
}
</ul>
{TExt}


{TEXT}
<button onClick={()=>{
  if(TEXT=="HELLO WORLD"){
    newTEXT("HELLO PAKISTAN")
  }else{

    newTEXT("HELLO WORLD")
  }

}}>click</button>

{Reverse}
{<button onClick={Viceversa}>REVERSE</button>}

        
        {show?<img src={laptop}></img>:<img src={bike}></img>}

        <button onClick={()=>setshow(!show)}>Hide/Show</button>
      
        



{showw?<img width="150px" src={onbulb}></img>:<img width="160px" src={offbulb}></img>}




<button onClick={()=>setshoww(!showw)}>OF</button>
<button onClick={()=>setshoww(!showw)}>ON</button>


<h3>{textt}</h3>
           { <button onClick={reversetext}>Click Me</button> }
              
        <p>
       QAZI UBAIDULLAH  Welcome To React jss<br/>
    
       <br/>

       <h3>Objects</h3>
       {car.name}
       <br/>
       {car.model}
       <br/>
       {car.color}
  <br/>
        </p>
        <a
        
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
    {meme}  {text}
  
        </a>
    
        <div>
        <h2>Array</h2>
      <ul>
      {language.map(function(item,index)
      {
        return <li> {index}{item} </li>
      }
      )}
      </ul>

      <ol>
        {cars.map(function(item)
        {
          return <li>{item}</li>
        }
        )}

      </ol>
<table border="40px">

<tr>
  <th>Name</th>
  <th>Model</th>
  <th>Color</th>
</tr>
{carlist.map(function(item)
{
 
  return <tr>
     <td>{item.name}</td>
     <td>{item.model}</td>
     <td>{item.color}</td>
   </tr>
}
)}




</table>

<table border="5px">
<tr>
  <th>Company Name</th>
  <th>Jobs</th>
</tr>
{
  complex.map(function(item)
  {
    return <tr>
      <td>{item.company}</td>
      <td><ol>{item.jobs.map(function(item)
      {
        return <li>{item}</li>
        
      }
      )}</ol></td>

    </tr>

  })
}
</table>
{list.map(function(item)
{
return <h2>{item.name}</h2>
}
)}


{data.map(function(item)
{
  return <h1>{item}</h1>
})}


 </div>
      
     
     <b/><br/><br/><br/><br/><br/>
 </header>
</div>
    
  );
}

export default App;
