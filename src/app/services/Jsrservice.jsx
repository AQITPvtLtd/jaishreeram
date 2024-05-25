// import React from "react";
// import { data } from "./information";
// import Image from "next/image";
// const Jsrservice = () => {
//   return (
//     <div className="mt-[100px]">
//       {data.map((d) => (
//         <div
//           key={d.id}
//           className="border border-gray-400 p-4 m-10 lg:flex hover:shadow-xl"
//         >
//           <div className="grid lg:grid-cols-12 gap-5 py-5">
//             <div className="lg:col-start-3 col-span-4">
//               <Image
//                 src={`${d.image}`}
//                 className="rounded-md"
//                 width={350}
//                 height={350}
//                 alt=""
//               />
//             </div>
//             <div className="col-span-4">
//               <h1 className="text-2xl p-2">{d.title}</h1>
//               <p className="text-sm p-2">{d.description}</p>
//               <h5 className="text-lg p-2">{d.btn}</h5>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Jsrservice;


import Services from '@/components/homepage/services/Services'
import React from 'react'

const jsrservice = () => {
  return (
    <div>
      <Services />
    </div>
  )
}

export default jsrservice

