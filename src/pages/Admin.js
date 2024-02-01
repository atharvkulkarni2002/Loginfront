import React,{useEffect,useState} from 'react';
import Axios from 'axios';

function Admin() {

    const[c1quantity,setC1quantity]=useState(0)
    const[c2quantity,setC2quantity]=useState(0)
    const[c1weight,setC1weight]=useState(0)
    const[c2weight,setC2weight]=useState(0)
    const[c1bcount,setC1bcount]=useState(0)
    const[c2bcount,setC2bcount]=useState(0)

    useEffect(()=>{
        const Response=Axios.get("https://loginbackend-21gt.onrender.com/getData").then((res)=>{
            console.log(res)
            res.data.map((item)=>{
                if(item.Role==="customer1"){
                    setC1quantity(item.Cdata.floating_quantity)
                    setC1weight(item.Cdata.floating_weight)
                    setC1bcount(item.Cdata.floating_Bcount)
                }
                else{
                    setC2quantity(item.Cdata.floating_quantity)
                    setC2weight(item.Cdata.floating_weight)
                    setC2bcount(item.Cdata.floating_Bcount)
                }
            })
        })
    },[])

  return (
    <>
<div class="relative overflow-x-auto p-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Item/Customer
                </th>
                <th scope="col" class="px-6 py-3">
                    Customer1
                </th>
                <th scope="col" class="px-6 py-3">
                    Customer2
                </th>
                <th scope="col" class="px-6 py-3">
                    Total
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Quantity
                </th>
                <td class="px-6 py-4">
                    {c1quantity}
                </td>
                <td class="px-6 py-4">
                    {c2quantity}
                </td>
                <td class="px-6 py-4">
                    {c1quantity+c2quantity}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Weight
                </th>
                <td class="px-6 py-4">
                    {c1weight}
                </td>
                <td class="px-6 py-4">
                    {c2weight}
                </td>
                <td class="px-6 py-4">
                    {c1weight+c2weight}
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Box Count
                </th>
                <td class="px-6 py-4">
                    {c1bcount}
                </td>
                <td class="px-6 py-4">
                    {c2bcount}
                </td>
                <td class="px-6 py-4">
                    {c1bcount+c2bcount}
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </>
  )
}

export default Admin