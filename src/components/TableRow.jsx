import { IoMdInformationCircle } from "react-icons/io";
import { GiDrippingStar } from "react-icons/gi";
import { BiSolidDollarCircle } from "react-icons/bi";

const TableRow = ({_id, level, userPoints , associatedUsers , userStars, index}) => {

  return (
    <tr className="odd:bg-black even:bg-[#151515] text-white">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-white whitespace-nowrap border border-[rgba(255,255,255,0.2)]"
            >
              {index+1}
            </th>
            <td className="px-6 py-4 border border-[rgba(255,255,255,0.2)]">
              {_id}
            </td>
            <td className="px-6 py-4 border border-[rgba(255,255,255,0.2)]">
              {level}
            </td>
            <td className="px-6 py-4 border border-[rgba(255,255,255,0.2)]">
              {userPoints}
            </td>
            <td className="px-6 py-4 border border-[rgba(255,255,255,0.2)]">
              {userStars}
              <GiDrippingStar className="inline-block ml-2 text-[#7b6cfc] text-[20px]" />
            </td>
            <td className="px-6 py-4 border border-[rgba(255,255,255,0.2)]">
              {associatedUsers.length}
            </td>
            <td className="px-6 py-4 border border-[rgba(255,255,255,0.2)]">
              345,644 USDC
              <BiSolidDollarCircle className="inline-block ml-2 text-[#90b9e3] text-[20px]" />
            </td>
          </tr>
  )
}

export default TableRow