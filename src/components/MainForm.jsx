
import React ,{useState} from 'react';
import { useFormik } from 'formik';

function MainForm() {

    const [name, setName] = useState('');
    const [selectors, setSelectors] = useState([]);
    const [isAgree, setIsAgree] = useState(false);

    function fetchData() {
        fetch("https://jsonserver-7byg.onrender.com/api/getFormData")
          .then(response => response.json())
          .then(data => {
            // Handle the retrieved data
            console.log("Data fetched successfully:", data);
          })
          .catch(error => {
            // Handle any errors that occurred during the request
            console.error("Error fetching data:", error);
          });
      }




      function clearDatabase() {
        fetch("https://jsonserver-7byg.onrender.com/clearData", {
          method: "DELETE"
        })
          .then(response => {
            if (response.ok) {
              console.log("Database cleared successfully.");
            } else {
              console.error("Failed to clear the database. Status:", response.status);
            }
          })
          .catch(error => {
            console.error("Error clearing the database:", error);
          });
      }
      






    // function postData() {
    //     const data = {
    //         name: values.name,
    //         sectors: values.sectors,
    //         agreeToTerms: values.agreeToTerms, 
    //     };
      
    //     fetch("https://jsonserver-7byg.onrender.com/", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(data)
    //     })
    //       .then(response => response.json())
    //       .then(result => {
    //         // Handle the response from the server
    //         console.log("Post request successful. Response:", result);
    //       })
    //       .catch(error => {
    //         // Handle any errors that occurred during the request
    //         console.error("Error posting data:", error);
    //       });
    //   }



    


  const formik = useFormik({
    initialValues: {
      name: '',
      sectors: [],
      agreeToTerms: false,
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      }

      if (values.sectors.length === 0) {
        errors.sectors = 'Please select at least one sector';
      }

      if (!values.agreeToTerms) {
        errors.agreeToTerms = 'You must agree to the terms and conditions';
      }

      return errors;
    },
    onSubmit: (values) => {
    
      console.log('Name:', values.name);
      console.log('Sectors:', values.sectors);
      console.log('Agreed to terms:', values.agreeToTerms);



      const data = {
        name: values.name,
        sectors: values.sectors,
        agreeToTerms: values.agreeToTerms, 
    };

    const populateForm = (data) => {
        setName(data.name);
        setSelectors(data.selectors);
        setIsAgree(data.isAgree);

        // formik.values = data

        // formik.handleChange
      };

    console.log("testData : ",data)
  
    fetch("https://jsonserver-7byg.onrender.com/api/saveFormData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {

        populateForm(result);
          // Handle the response from the server
          console.log("Post request successful. Response:", result);
    })
      
      .then(()=>{
        fetchData()
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error("Error posting data:", error);
      });



    },
  });

  return (
    <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
      <p className="mb-4">
        Please enter your name and pick the sectors you are currently involved in.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700" style={{ marginRight: '15px' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            // value={name}
            onChange={formik.handleChange}
            // onChange={(e)=>{setName(e.target.value)}}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500">{formik.errors.name}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="sectors" className="block text-gray-700" style={{ marginRight: '15px' }}>
            Sectors:
          </label>
          <select
            multiple
            size="5"
            id="sectors"
            name="sectors"
            value={formik.values.sectors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="1">Manufacturing</option>
            <option value="19">&nbsp;&nbsp;&nbsp;&nbsp;Construction materials</option>
            <option value="18">&nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics</option>
            <option value="6">&nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage</option>
             <option value="342">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp; confectionery products</option>
             <option value="43">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages</option>
             <option value="42">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish products</option>
             <option value="40">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat products</option>
             <option value="39">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy products</option>
             <option value="437">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
             <option value="378">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; snack food</option>
             <option value="13">&nbsp;&nbsp;&nbsp;&nbsp;Furniture</option>
             <option value="389">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna</option>
             <option value="387">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom</option>
             <option value="386">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children&#x27;s room</option>
             <option value="414">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen</option>
             <option value="101">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room</option>
             <option value="392">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office</option>
             <option value="394">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
          </select>
          {formik.touched.sectors && formik.errors.sectors && (
            <div className="text-red-500">{formik.errors.sectors}</div>
          )}
        </div>
        <div className="mb-4" style={{marginBottom:"15px"}}>
          <label className="flex items-center">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formik.values.agreeToTerms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mr-2"
            />
            <span className="text-gray-700">I agree to the terms and conditions.</span>
          </label>
          {formik.touched.agreeToTerms && formik.errors.agreeToTerms && (
            <div className="text-red-500">{formik.errors.agreeToTerms}</div>
          )}
        </div>

        <button
         style={{marginRight:"50px"}}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save
        </button>

        <button  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
       
        onClick={clearDatabase}
        >
            Clear Database
        </button>
      </form>
    </div>
  );
}

export default MainForm;