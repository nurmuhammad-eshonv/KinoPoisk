// import React, { useState, useEffect, useContext } from "react";
// import SideMenu from "../components/SideMenu";
// import Input from "../components/Input";
// import { MdLocalMovies } from "react-icons/md";
// import { CiBookmark } from "react-icons/ci";
// import { DataContext } from "../App";
// import Toastify from 'toastify-js';
// import "toastify-js/src/toastify.css"; 
// import axios from "../utils/axios"; // Axios instance with interceptors

// function Home() {
//   const [items, setItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const { data, setData } = useContext(DataContext);
//   const [filteredItems, setFilteredItems] = useState([])

//   function handleBringData(item) {
//     const itemExists = data.some((dataItem) => dataItem.id === item.id);

//     if (itemExists) {
//       Toastify({
//         text: "Already added!",
//         duration: 3000,
//         close: true,
//         gravity: "top",
//         position: "right",
//         style: {
//           background: "linear-gradient(to right, #ff5f6d, #ffc371)",
//         },
//       }).showToast();
//     } else {
//       const updatedData = [...data, item];
//       setData(updatedData);
//       localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedData));

//       Toastify({
//         text: "Movie bookmarked!",
//         duration: 3000,
//         close: true,
//         gravity: "top",
//         position: "right",
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//       }).showToast();
//     }
//   }

//   useEffect(() => {
//     axios.get("/v1.4/movie?rating.imdb=8-10&limit=110")
//       .then((response) => setItems(response.data.docs))
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);


//   useEffect(() => {
//     axios.get(`/v1.4/movie/search?query=${searchTerm}`)
//     .then(data => setFilteredItems(data)
//     )
//   })


//   return (
//     <div className="flex h-[100vh]">
//       {/* Fixed Sidebar */}
//       <div className="fixed top-10 left-6 h-full">
//         <SideMenu />
//       </div>
      
//       <div className="ml-[106px] p-4 w-full">
//         <Input searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//         <h1 className="text-[32px] mt-[32px] text-white">Trending</h1>  

//         <div className="mt-[25px] max-w-[1380px] overflow-hidden">
//           <div className="scrolling-container">
//             <div className="scrolling-content">
//               {items.map((item, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     backgroundImage: `url(${
//                       item.poster ? item.poster.previewUrl : "https://image.openmoviedb.com/kinopoisk-images/10592371/08982e09-7b03-42f5-8074-019920ca0e7c/orig"
//                     })`,
//                   }}
//                   className="w-[470px] h-[230px] rounded-lg pt-[144px] p-[24px] relative"
//                 >
//                   <div
//                     onClick={() => handleBringData(item)}
//                     className="bg-slate-500 flex items-center justify-center w-10 h-10 rounded-full absolute -mt-[130px] ml-[387px] cursor-pointer"
//                   >
//                     <CiBookmark className="text-white w-5 h-5" />
//                   </div>
//                   <div className="text-gray-100 text-[15px]">
//                     <p className="flex gap-3 items-center">
//                       <span>{item.year} •</span> <MdLocalMovies />
//                       <span>
//                         {item.genres?.map((genre) => genre.name).join(", ")} •{" "}
//                       </span>
//                       <span>{item.rating?.imdb || "N/A"}</span>
//                     </p>
//                   </div>
//                   <p className="text-[24px] text-white">
//                     {item.name || item.alternativeName}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <h1 className="text-[32px] mt-[40px] text-white">
//           Recommended for you
//         </h1>

//         <div className="flex gap-[40px] flex-wrap mt-[32px] ml-4 mr-4">
//           {
//             searchTerm.length > 0 && 
//             filteredItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="w-[300px] h-[246px] rounded-xl relative"
//                 onClick={() => handleBringData(item)}
//               >
//                 <img
//                   className="w-full h-[174px] object-cover rounded-xl"
//                   src={
//                     item.poster?.previewUrl || "https://picsum.photos/470/309"
//                   }
//                   alt="3"
//                 />
//                 <div
//                   className="bg-slate-500 flex items-center justify-center w-10 h-10 rounded-full absolute -mt-[168px] ml-[254px] cursor-pointer"
//                 >
//                   <CiBookmark className="text-white w-5 h-5" />
//                 </div>

//                 <p className="flex gap-3 items-center text-gray-400 p-2">
//                   <span>{item.year} •</span> <MdLocalMovies />
//                   <span>{item.genres?.[0]?.name || "N/A"} • </span>
//                 </p>
//                 <p className="text-[15px] pl-2 text-white">
//                   {item.name || item.alternativeName}
//                 </p>
//               </div>
//             ))}
          
//           {!searchTerm.length > 0 && items.length > 0 &&
//             items.map((item, index) => (
//               <div
//                 key={index}
//                 className="w-[300px] h-[246px] rounded-xl relative"
//                 onClick={() => handleBringData(item)}
//               >
//                 <img
//                   className="w-full h-[174px] object-cover rounded-xl"
//                   src={
//                     item.poster?.previewUrl || "https://picsum.photos/470/309"
//                   }
//                   alt="3"
//                 />
//                 <div
//                   className="bg-slate-500 flex items-center justify-center w-10 h-10 rounded-full absolute -mt-[168px] ml-[254px] cursor-pointer"
//                 >
//                   <CiBookmark className="text-white w-5 h-5" />
//                 </div>

//                 <p className="flex gap-3 items-center text-gray-400 p-2">
//                   <span>{item.year} •</span> <MdLocalMovies />
//                   <span>{item.genres?.[0]?.name || "N/A"} • </span>
//                 </p>
//                 <p className="text-[15px] pl-2 text-white">
//                   {item.name || item.alternativeName}
//                 </p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useState, useEffect, useContext } from "react";
import SideMenu from "../components/SideMenu";
import Input from "../components/Input";
import { MdLocalMovies } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { DataContext } from "../App";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"; 
import axios from "../utils/axios"; // Axios instance with interceptors

function Home() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, setData } = useContext(DataContext);
  const [filteredItems, setFilteredItems] = useState([]);

  function handleBringData(item) {
    const itemExists = data.some((dataItem) => dataItem.id === item.id);

    if (itemExists) {
      Toastify({
        text: "Already added!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #ff5f6d, #ffc371)",
        },
      }).showToast();
    } else {
      const updatedData = [...data, item];
      setData(updatedData);
      localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedData));

      Toastify({
        text: "Movie bookmarked!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
  }

  // Fetch trending movies on initial load
  useEffect(() => {
    axios.get("/v1.4/movie?rating.imdb=8-10&limit=110")
      .then((response) => setItems(response.data.docs))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Fetch filtered items when searchTerm changes
  useEffect(() => {
    if (searchTerm) {
      axios.get(`/v1.4/movie/search?query=${searchTerm}`)
        .then((response) => setFilteredItems(response.data.docs))
        .catch((error) => {
          console.error("Error fetching search data:", error);
        });
    } else {
      setFilteredItems([]); // Clear filtered items when searchTerm is empty
    }
  }, [searchTerm]);

  const displayedItems = searchTerm.length > 0 ? filteredItems : items;

  return (
    <div className="flex h-[100vh]">
      {/* Fixed Sidebar */}
      <div className="fixed top-10 left-6 h-full">
        <SideMenu />
      </div>
      
      <div className="ml-[106px] p-4 w-full">
        <Input searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text-[32px] mt-[32px] text-white">Trending</h1>  

        <div className="mt-[25px] max-w-[1380px] overflow-hidden">
          <div className="scrolling-container">
            <div className="scrolling-content">
              {items.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${
                      item.poster ? item.poster.previewUrl : "https://image.openmoviedb.com/kinopoisk-images/10592371/08982e09-7b03-42f5-8074-019920ca0e7c/orig"
                    })`,
                  }}
                  className="w-[470px] h-[230px] rounded-lg pt-[144px] p-[24px] relative"
                >
                  <div
                    onClick={() => handleBringData(item)}
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

        <h1 className="text-[32px] mt-[40px] text-white">Recommended for you</h1>

        <div className="flex gap-[40px] flex-wrap mt-[32px] ml-4 mr-4">
          {displayedItems.map((item, index) => (
            <div
              key={index}
              className="w-[300px] h-[246px] rounded-xl relative"
              onClick={() => handleBringData(item)}
            >
              <img
                className="w-full h-[174px] object-cover rounded-xl"
                src={item.poster?.previewUrl || "https://picsum.photos/470/309"}
                alt="3"
              />
              <div
                className="bg-slate-500 flex items-center justify-center w-10 h-10 rounded-full absolute -mt-[168px] ml-[254px] cursor-pointer"
              >
                <CiBookmark className="text-white w-5 h-5" />
              </div>

              <p className="flex gap-3 items-center text-gray-400 p-2">
                <span>{item.year} •</span> <MdLocalMovies />
                <span>{item.genres?.[0]?.name || "N/A"} • </span>
              </p>
              <p className="text-[15px] pl-2 text-white">
                {item.name || item.alternativeName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
