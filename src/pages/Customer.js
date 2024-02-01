import React,{useState} from 'react';
import Axios from 'axios';

function Customer() {

    const[odate,setOdate]=useState();
    const[company,setCompany]=useState();
    const[owner,setOwner]=useState();
    const[item,setItem]=useState();
    const[quantity,setQuantity]=useState();
    const[weight,setWeight]=useState();
    const[RFS,setRFS]=useState();
    const[TID,setTID]=useState();
    const[Ssize,setSSize]=useState();
    const[Bcount,setBCount]=useState();
    const[Specification,setSpecification]=useState();
    const[Cqunatity,setCQunatity]=useState();


    const handleDateChange = (event) => {
        const value = event.target.value;
        setOdate(value);
      };
    const handleCompanyChange = (event) => {
        const value = event.target.value;
        const alphanumericValue = value.replace(/[^a-zA-Z0-9]/g, '');
        setCompany(alphanumericValue);
      };
    const handleOwnerChange = (event) => {
        const value = event.target.value;
        const alphanumericValue = value.replace(/[^a-zA-Z0-9]/g, '');
        setOwner(alphanumericValue);
      };
    const handleItemChange = (event) => {
        const value = event.target.value;
        const alpha = value.replace(/[^a-zA-Z]/g, '');
        setItem(alpha);
      };
    const handleQuantityChange = (event) => {
        const value = event.target.value;
        const alphanumericValue = value.replace(/[^0-9]/g, '');
        setQuantity(alphanumericValue);
      };
    const handleWeightChange = (event) => {
        const value = event.target.value;
        const isValidFloat = /^-?\d*(\.\d*)?$/.test(value);
        if (isValidFloat || value === '') {
            setWeight(value);
        }
      };
    const handleRFSChange = (event) => {
        const value = event.target.value;
            setRFS(value);
      };
    const handleTIDChange = (event) => {
        const value = event.target.value;
            setTID(value);
      };
      const handleSizeChange = (event) => {
        const value = event.target.value;
        const alphanumericValue = value.replace(/[^0-9X]/g, ''); 
        setSSize(alphanumericValue)
      };
      const handleCountChange = (event) => {
        const value = event.target.value;
        const alphanumericValue = value.replace(/[^0-9]/g, ''); 
        setBCount(alphanumericValue)
      };
      const handleSpecificationChange = (event) => {
        const value = event.target.value;
        setSpecification(value)
      };
      const handleCQuantityChange = (event) => {
        const value = event.target.value;
        setCQunatity(value)
      };

      const insertdata = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        let Cdata = Object.fromEntries(data.entries());
        Cdata={Cdata,Role:`${localStorage.getItem("mail")}`}
        console.log(Cdata)
    
        Axios.post("https://loginbackend-21gt.onrender.com/insert", Cdata).then((res) => {
          console.log(res);
          console.log("added");
          window.location.reload();
        }).catch((err)=>{
          console.log(err);
        });
      };
      
  return (
    <>
    <div className='bg-gray-50 dark:bg-gray-900 p-20 h-full'>
<form className="max-w-md mx-auto" onSubmit={insertdata}>
  <div className="relative z-0 w-full mb-5 group">
      <input type="date" name="floating_date" id="floating_date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
      value={odate}
      onChange={handleDateChange} />
      <label htmlFor="floating_date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Order Date</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
      value={company}
      onChange={handleCompanyChange}/>
      <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_owner" id="floating_owner" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
      value={owner}
      onChange={handleOwnerChange}/>
      <label htmlFor="floating_owner" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Owner</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_item" id="floating_item" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
      value={item}
      onChange={handleItemChange}/>
      <label for="floating_item" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="number" name="floating_quantity" id="floating_quantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
      value={quantity}
      onChange={handleQuantityChange}/>
      <label for="floating_quantity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="number" name="floating_weight" id="floating_weight" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
      value={weight}
      onChange={handleWeightChange}/>
      <label for="floating_weight" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Weigth</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_RFS" id="floating_RFS" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
      value={RFS}
      onChange={handleRFSChange}/>
      <label for="floating_RFS" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Request For Shipment</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_TID" id="floating_TID" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
      value={TID}
      onChange={handleTIDChange}/>
      <label for="floating_TID" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tracking ID</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_Ssize" id="floating_Ssize" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="LXBXH" required pattern={'^[0-9]+X[0-9]+X[0-9]+$'}
      value={Ssize}
      onChange={handleSizeChange}/>
      <label for="floating_Ssize" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-focus:scale-75 peer-focus:-translate-y-6">Shipment Size</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="number" name="floating_Bcount" id="floating_Bcount" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
      value={Bcount}
      onChange={handleCountChange}/>
      <label for="floating_Bcount" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Box Count</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_Specification" id="floating_Specification" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
      value={Specification}
      onChange={handleSpecificationChange}/>
      <label for="floating_Specification" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Specification</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_Cquantity" id="floating_Cquantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
      value={Cqunatity}
      onChange={handleCQuantityChange}/>
      <label for="floating_Cquantity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Checklist Quantity</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
    </>
  )
}

export default Customer