import React, { useState, useEffect } from "react";
import { MdLocalMovies } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import SideMenu from "../components/SideMenu";
import Input from "../components/Input";
import { MdDelete } from "react-icons/md";

function BookMarkMovies() {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  // Load bookmarked movies from localStorage on component mount
  useEffect(() => {
    const storedMovies = localStorage.getItem("bookmarkedMovies");
    if (storedMovies) {
      setBookmarkedMovies(JSON.parse(storedMovies));
    }
  }, []);

  // Function to handle deletion of bookmarked movies
  function handleDelete(item) {
    const updatedMovies = bookmarkedMovies.filter(
      (movie) => movie.id !== item.id
    );
    setBookmarkedMovies(updatedMovies);
    localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedMovies));
  }

  return (
    <div className="containerr flex items-start gap-[36px]">
      <SideMenu />
      <div>
        <Input />

        <h1 className="text-[32px] mt-[40px] text-white">Bookmarked Movies</h1>

        <div className="flex gap-[40px] flex-wrap justify-start mt-[32px]">
          {bookmarkedMovies.length > 0 ? (
            bookmarkedMovies.map((item, index) => (
              <div
                key={index}
                className="w-[300px] h-[246px] rounded-xl"
              >
                <img
                  className="w-full h-[174px] object-cover rounded-xl"
                  src={
                    item.poster?.previewUrl || "https://picsum.photos/470/309"
                  }
                  alt={item.name || item.alternativeName}
                />
                <div
                  className="bg-gray-400 flex items-center justify-center w-10 h-10 rounded-full absolute -mt-[168px] ml-[254px] cursor-pointer"
                >
                  <MdDelete
                    onClick={() => handleDelete(item)}
                    className="text-white w-5 h-5"
                  />
                </div>

                <p className="flex gap-3 items-center text-gray-400 p-2">
                  <span>{item.year} •</span> <MdLocalMovies />
                  <span>{item.genres?.[0]?.name || "N/A"} • </span>
                </p>
                <p className="text-[15px] pl-2 text-white">
                  {item.name || item.alternativeName}
                </p>
              </div>
            ))
          ) : (
            <p className="text-white">No bookmarks available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookMarkMovies;
