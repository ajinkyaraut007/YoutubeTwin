import { useDispatch, useSelector } from "react-redux";
import {
  hamBurger_icon,
  profile_img,
  search_icon,
  search_suggestion_api,
  youtube_icon,
} from "../Constants";
import {
  toggleDropDownState,
  toggleHamburgerState,
} from "../utils/hamburgerSlice";
import { useEffect, useState } from "react";
import { setSearchState } from "../utils/SearchSlice";

function Header() {
  const Dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState(null);

  const isDropDownSet = useSelector((store) => store.hamburger.dropwDownFlag);

  async function getResultsFromSearchSuggestionAPI() {
    const data = await fetch(search_suggestion_api + searchText);
    const json = await data.json();

    setSuggestions(json[1]);
    Dispatch(setSearchState({ [searchText]: json[1] }));
  }
  const searchResult = useSelector((store) => store.searchData);

  useEffect(() => {
    //api call

    const debouncingTimer = setTimeout(() => {
      if (searchResult[searchText]) {
        setSuggestions(searchResult[searchText]);
      } else {
        getResultsFromSearchSuggestionAPI();
      }
    }, 300);

    return () => {
      clearTimeout(debouncingTimer);
    };
  }, [searchText]);

  function handlehamburgerClick() {
    Dispatch(toggleHamburgerState());
  }
  function handleSearchChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className="flex grid grid-flow-col">
      <div className="flex p-4 col-span-3">
        <img
          className="h-6 mr-4 cursor-pointer hover:bg-gray-200 rounded-full"
          alt="hamburger"
          src={hamBurger_icon}
          onClick={handlehamburgerClick}
        />
        <img className="h-6" alt="youtube_Icon" src={youtube_icon} />
      </div>
      <div className="col-span-6 p-4 relative">
        <div className="flex border-solid ">
          <input
            type="text"
            className="px-4 border border-gray-400 rounded-l-full h-8 w-3/4"
            placeholder="Search"
            value={searchText}
            onChange={(e) => handleSearchChange(e)}
            onFocus={() => Dispatch(toggleDropDownState(true))}
            onBlur={() => Dispatch(toggleDropDownState(false))}
          />
          <button className="border border-gray-400  hover:bg-gray-300 bg-gray-100 rounded-r-full">
            <img className="h-4 mx-4 " src={search_icon} />
          </button>
        </div>
        {isDropDownSet && (
          <div className="border border-gray-200 mt-1 bg-white w-3/4 rounded-xl absolute">
            <ul>
              {suggestions.map((suggest, Index) => {
                return (
                  <li key={Index} className="p-2 hover:bg-gray-200">
                    {suggest}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-3 p-4">
        <img alt="" className="h-8" src={profile_img} />
      </div>
    </div>
  );
}

export default Header;
