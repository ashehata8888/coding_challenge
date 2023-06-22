/* eslint-disable */

import React, { useState, useEffect } from 'react';

const EditableTable = ({countId}) => {
  const [tableData, setTableData] = useState([]);
  const [arrReplace,setArrReplace] = useState([])

  useEffect(() => {

    if(countId > 0 ){
        fetch('https://jsonserver-7byg.onrender.com/api/getFormData')
        .then(response => response.json())
        .then(data => setTableData(data));
        console.log("testCountId",countId)
    }

  },[countId]);


  useEffect(()=>{

    let newsecArr = [...arrReplace]
    newsecArr = [newsecArr,]

  },[countId])

  const handleEdit = (rowId) => {
    // Handle edit functionality for the specific row
    console.log(`Editing row with ID: ${rowId}`);
  };

  const array = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ];
  
  const replacementObject = { id: 2, name: 'Orange' };

let sectorsArrAfterReplace = []

  const arrReplaceFun = (arr)=>{
  arr.map((row)=>{
    row == 1 ? sectorsArrAfterReplace.push("Manufacturing") :
    row == 19 ? sectorsArrAfterReplace.push("Construction materials") :
    row == 18 ? sectorsArrAfterReplace.push("Electronics and Optics") :
    row == 6 ? sectorsArrAfterReplace.push("Food and Beverage") :
    row == 342 ? sectorsArrAfterReplace.push("Bakery &amp; confectionery products") :
    row == 43 ? sectorsArrAfterReplace.push("Beverages") :
    row == 42 ? sectorsArrAfterReplace.push("Fish & fish products") :
    row == 40 ? sectorsArrAfterReplace.push("Meat & meat products") :
    row == 39 ? sectorsArrAfterReplace.push("Milk & dairy products") :
    row == 437 ? sectorsArrAfterReplace.push("Other") :
    row == 378 ? sectorsArrAfterReplace.push("Sweets & snack food") :
    row == 13 ? sectorsArrAfterReplace.push("Furniture") :
    row == 389 ? sectorsArrAfterReplace.push("Bathroom/sauna") :
    row == 387 ? sectorsArrAfterReplace.push("Bedroom") :
    row == 386 ? sectorsArrAfterReplace.push("Children & room") :
    row == 414 ? sectorsArrAfterReplace.push("Kitchen") :
    row == 101 ? sectorsArrAfterReplace.push("Living room") :
    row == 392 ? sectorsArrAfterReplace.push("Office") :
    row == 394 ? sectorsArrAfterReplace.push("Other") : null
    // row.length > 1 ? row.sectors.join(",") : null
  })

  return sectorsArrAfterReplace.join(" , ")

  }
  
  
//   const updatedArray = tableData.map(item => {
//     if (item.id === replacementObject.id) {
//       return replacementObject;
//     }
//     return item;
//   });
  
//   console.log(updatedArray);

  

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Selectors</th>
          <th>isAgree</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(tableData) ? tableData.map((row) => (
           
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{

arrReplaceFun(row.sectors)

            // row.sectors == 1 ? "Manufacturing" :
            // row.sectors == 19 ? "Construction materials" :
            // row.sectors == 18 ? "Electronics and Optics" :
            // row.sectors == 6 ? "Food and Beverage" :
            // row.sectors == 342 ? "Bakery &amp; confectionery products" :
            // row.sectors == 43 ? "Beverages" :
            // row.sectors == 42 ? "Fish & fish products" :
            // row.sectors == 40 ? "Meat & meat products" :
            // row.sectors == 39 ? "Milk & dairy products" :
            // row.sectors == 437 ? "Other" :
            // row.sectors == 378 ? "Sweets & snack food" :
            // row.sectors == 13 ? "Furniture" :
            // row.sectors == 389 ? "Bathroom/sauna" :
            // row.sectors == 387 ? "Bedroom" :
            // row.sectors == 386 ? "Children & room" :
            // row.sectors == 414 ? "Kitchen" :
            // row.sectors == 101 ? "Living room" :
            // row.sectors == 392 ? "Office" :
            // row.sectors == 394 ? "Other" : 
            // row.sectors.length > 1 ? row.sectors.join(",") : null
            }</td>
            <td>{`${row.agreeToTerms}`}</td>
            <td>
              <button onClick={() => handleEdit(row.id)}>Edit</button>
            </td>
  
          </tr>
       
        )):
        <tr>
            <td colSpan="4">Loading data...</td>
          </tr>
    
    }
      </tbody>
    </table>
  );
};

export default EditableTable;
