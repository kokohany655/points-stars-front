"use client"
import { IoMdInformationCircle } from "react-icons/io";
import TableRow from "./TableRow";
import { useEffect, useState } from "react";
import baseUrl from "../../baseUrl";
import { GiDrippingStar } from "react-icons/gi";
import { BiSolidDollarCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Table = () => {
  const router=  useRouter()
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const {data} = await baseUrl.get(`/users/${localStorage.getItem("id")}`);
    setData(data);
    console.log(data);
  }
  const generateToken = async()=>{
   await baseUrl.post(`/users/refer/${localStorage.getItem("id")}`);
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex flex-col justify-end">

      <h1 className="text-white mb-4 font-extrabold text-2xl w-full">Hello { data.name}</h1>
      {
        data.referCodes ?  <h1 className="text-white mb-4 opacity-80 font-extrabold text-2xl w-full">referCode  { data.referCodes}</h1>:
        <button className=" text-start mb-4" onClick={()=>generateToken()}>generateToken</button>

      }
    <button className=" text-start"  onClick={()=>{
      localStorage.clear()
      router.push('/login')
    }  }>Sign out</button>
      </div>
      
      
      <table className="w-[1165px] text-sm text-center">
        <thead className="text-lg text-white bg-black">
          <tr>
            <th scope="col" className="px-6 py-3" colSpan={2}>
              Wallet
            </th>
            <th scope="col" className="px-6 py-3">
              <span>Level</span>
              <IoMdInformationCircle className="inline-block ml-2" />
            </th>
            <th scope="col" className="px-6 py-3">
              <span>Points</span>
              <IoMdInformationCircle className="inline-block ml-2" />
            </th>
            <th scope="col" className="px-6 py-3">
              <span>Stars</span>
              <IoMdInformationCircle className="inline-block ml-2" />
            </th>
            <th scope="col" className="px-6 py-3">
              <span>Referrals</span>
              <IoMdInformationCircle className="inline-block ml-2" />
            </th>
            <th scope="col" className="px-6 py-3">
              <span>Value Referred</span>
              <IoMdInformationCircle className="inline-block ml-2" />
            </th>
          </tr>
        </thead>
        <tbody>
        <tr className="odd:bg-black even:bg-[#151515] text-white">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-white whitespace-nowrap border border-[rgba(255,255,255,0.2)]"
            >
              You
            </th>
            <td className="px-6 py-4 border border-[rgba(255,255,255,0.2)]">
              {data?._id}
            </td>
            <td className="px-6 py-4 border border-[rgba(255,255,255,0.2)]">
              {data?.level}
            </td>
            <td className="px-6 py-4 border border-[rgba(255,255,255,0.2)]">
              {data?.userPoints}
            </td>
            <td className="px-6 py-4 border border-[rgba(255,255,255,0.2)]">
              {data?.userStars}
              <GiDrippingStar className="inline-block ml-2 text-[#7b6cfc] text-[20px]" />
            </td>
            <td className="px-6 py-4 border border-[rgba(255,255,255,0.2)]">
              {data?.associatedUsers?.length}
            </td>
            <td className="px-6 py-4 border border-[rgba(255,255,255,0.2)]">
              345,644 USDC
              <BiSolidDollarCircle className="inline-block ml-2 text-[#90b9e3] text-[20px]" />
            </td>
          </tr>
          {data?.associatedUsers?.map((item , index) => {
            return <TableRow key={item._id} {...item} index={index} />
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
