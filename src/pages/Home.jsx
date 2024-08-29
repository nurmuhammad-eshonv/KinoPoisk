// import React from "react";
// import SideMenu from "../components/SideMenu";
// import Input from "../components/Input";
// import { MdLocalMovies } from "react-icons/md";

// function Home() {
//   return (
//     <div className="containerr flex items-start gap-[36px]">
//       <SideMenu />
//       <div>
//         <Input />
//         <h1 className="text-[32px] mt-[32px] text-white">Trending</h1>

//         <div className="mt-[25px] flex gap-[40px] max-w-full overflow-scroll">
//           <div
//             style={{ backgroundImage: "url('https://picsum.photos/470/309')" }}
//             className=" w-[470px] h-[230px] rounded-lg pt-[144px] p-[24px] "
//           >
//             <div className="text-[#d1d2d7]  text-[15px]">
//               <p className="flex gap-3 items-center ">
//                 <span>2019 •</span> <MdLocalMovies className="" />{" "}
//                 <span>Movie • </span> <span>PG</span>{" "}
//               </p>
//             </div>
//             <p className="text-[24px] text-white">Beyond Earth</p>
//           </div>{" "}
//           <div
//             style={{ backgroundImage: "url('https://picsum.photos/470/309')" }}
//             className=" w-[470px] h-[230px] rounded-lg pt-[144px] p-[24px] "
//           >
//             <div className="text-[#d1d2d7]  text-[15px]">
//               <p className="flex gap-3 items-center ">
//                 <span>2019 •</span> <MdLocalMovies className="" />{" "}
//                 <span>Movie • </span> <span>PG</span>{" "}
//               </p>
//             </div>
//             <p className="text-[24px] text-white">Beyond Earth</p>
//           </div>{" "}
//           <div
//             style={{ backgroundImage: "url('https://picsum.photos/470/309')" }}
//             className=" w-[470px] h-[230px] rounded-lg pt-[144px] p-[24px] "
//           >
//             <div className="text-[#d1d2d7]  text-[15px]">
//               <p className="flex gap-3 items-center ">
//                 <span>2019 •</span> <MdLocalMovies className="" />{" "}
//                 <span>Movie • </span> <span>PG</span>{" "}
//               </p>
//             </div>
//             <p className="text-[24px] text-white">Beyond Earth</p>
//           </div>{" "}
//           <div
//             style={{ backgroundImage: "url('https://picsum.photos/470/309')" }}
//             className=" w-[470px] h-[230px] rounded-lg pt-[144px] p-[24px] "
//           >
//             <div className="text-[#d1d2d7]  text-[15px]">
//               <p className="flex gap-3 items-center ">
//                 <span>2019 •</span> <MdLocalMovies className="" />{" "}
//                 <span>Movie • </span> <span>PG</span>{" "}
//               </p>
//             </div>
//             <p className="text-[24px] text-white">Beyond Earth</p>
//           </div>{" "}
//           <div
//             style={{ backgroundImage: "url('https://picsum.photos/470/309')" }}
//             className=" w-[470px] h-[230px] rounded-lg pt-[144px] p-[24px] "
//           >
//             <div className="text-[#d1d2d7]  text-[15px]">
//               <p className="flex gap-3 items-center ">
//                 <span>2019 •</span> <MdLocalMovies className="" />{" "}
//                 <span>Movie • </span> <span>PG</span>{" "}
//               </p>
//             </div>
//             <p className="text-[24px] text-white">Beyond Earth</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import { useState, useEffect } from "react";
import React from "react";
import SideMenu from "../components/SideMenu";
import Input from "../components/Input";
import { MdLocalMovies } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import axios from "axios";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10&limit=30", {
        headers: {
          "X-API-KEY": "WPVCNA8-BFG4ZRF-N4W3SD4-8TRWN1B",
        },
      })
      .then((data) => {
        setItems(data.data.docs);
        console.log(data.data.docs);
      });
  }, []);

  return (
    <div className="containerr flex items-start gap-[36px]">
      <SideMenu />
      <div>
        <div>
          <Input />
          <h1 className="text-[32px] mt-[32px] text-white">Trending</h1>

          <div className="mt-[25px] max-w-[1380px] overflow-hidden">
            <div className="scrolling-container">
              <div className="scrolling-content">
                {items.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(${
                        item.poster?.previewUrl ||
                        "https://picsum.photos/470/309"
                      })`,
                    }}
                    className="w-[470px] h-[230px] rounded-lg pt-[144px] p-[24px] relative"
                  >
                    <div
                      onClick={() => {}}
                      className="bg-slate-500 flex items-center justify-center w-10 h-10 rounded-full absolute -mt-[130px] ml-[387px] cursor-pointer"
                    >
                      <CiBookmark className="text-white w-5 h-5" />
                    </div>
                    <div className="text-gray-100 text-[15px]">
                      <p className="flex gap-3 items-center">
                        <span>{item.year} •</span> <MdLocalMovies />
                        <span>
                          {item.genres?.map((genre) => genre.name).join(", ")} •{" "}
                        </span>
                        <span>{item.rating?.imdb || "N/A"}</span>
                      </p>
                    </div>
                    <p className="text-[24px] text-white">
                      {item.name || item.alternativeName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[32px] mt-[40px] text-white">Recommended for you</h1>

        <div className="flex gap-[40px] flex-wrap justify-start mt-[32px]">
          {items.length > 0 &&
            items.map((item, index) => {
              // Corrected parameter order
              return (
                <div
                  key={index}
                  className="w-[300px] h-[246px] rounded-xl"
                >
                  <img
                    className="w-full h-[174px] object-cover rounded-xl"
                    src={
                      item.poster?.previewUrl || "https://picsum.photos/470/309"
                    }
                    alt="3"
                  />
                      <div
                      onClick={() => {}}
                      className="bg-slate-500 flex items-center justify-center w-10 h-10 rounded-full absolute -mt-[168px] ml-[254px] cursor-pointer"
                    >
                      <CiBookmark className="text-white w-5 h-5" />
                    </div>
                  
                  <p className="flex gap-3 items-center text-gray-400 p-2">
                    <span>{item.year} •</span> <MdLocalMovies />
                    <span>{item.genres?.[0]?.name || "N/A"} • </span>
                    {/* <span>{item.rating?.imdb || "N/A"}</span> */}
                  </p>
                  <p className="text-[15px] pl-2 text-white">
                    {item.name || item.alternativeName}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
