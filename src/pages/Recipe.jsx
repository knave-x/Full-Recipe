 import React, { useState,useEffect } from 'react'
 import styled from "styled-components"
  import {useParams} from "react-router-dom"

 
 const  Recipe= ()=> {
    
    let params = useParams()
    const [details,setDetails]= useState({});
    const [activeTab,setActiveTab]=useState("instructions")
    const fetchDetails = async () => {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=fe5e0844d264476598fde829503a819c`
        );
        

        const detailData = await data.json();
        console.log("recipe data: ",data);
        setDetails(detailData);
        console.log("details data : ",detailData)
      };
      useEffect(() => {
        fetchDetails();
        
      }, [params.name]);
   

   
    return (
     <DetailWrapper>
         <div>
             <h2>{details.title}</h2>
             <img src= {details.image} alt=""/>

         </div>
        <Info>
            <Button className={activeTab===`instructions` ?`active`:`` } onClick={()=>setActiveTab("instructions")} > Instructions</Button>
            <Button className={activeTab===`ingredients` ?`active`:`` } onClick={()=>setActiveTab("ingredients")} > Ingredients</Button>


        </Info> 


     </DetailWrapper>
   )
 }
 const DetailWrapper = styled.div`
 margin-top: 10rem;
 margin-bottom: 5rem;
 display: flex;
 .active {
    background: linear-gradient(
        to right,
        rgba(73, 73, 73, 1) 0%,
        rgba(49, 49, 49, 1) 100%
      );
      color : white;
 }

 h2{
     margin-bottom: 2rem;
 }
 li{
     font-size: 1.2rem;
     line-height: 2.5rem;
 }
 ul {
     margin-top: 2rem;
 }
 
 
 `
const Button = styled.button `
 padding : 1rem 2rem;
 color: #313131;
 background: white;
 border: 2px solid black;
 margin-right: 2rem;
 font-weight : 600;

`
const Info = styled.div`
margin-left: 10rem;



`
 export default Recipe