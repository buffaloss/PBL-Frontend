import { SearchWrapper } from "./styles"
import React, { useEffect, useState } from "react";
import { Input, Image } from "@nextui-org/react";
import { Container, Row, Col } from "react-bootstrap";
import { MainButton } from "./styles";

const SearchBar = ({ onTagsChange, propsTags }) => {
  const [tags, setTags] = useState([...propsTags]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    onTagsChange(tags);
  }, [tags]);

  const addTag = () => {
    console.log("before add SearchBar", propsTags);
    if (searchQuery?.length > 0) {
      const localTagsArray = [...propsTags];
      localTagsArray.push(searchQuery);
      setTags([...localTagsArray]);
      setSearchQuery('');
    }
  }

  return (
    <Input
      clearable
      bordered
      aria-label={"dd"}
      fullWidth
      color="primary"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      size="lg"
      contentClickable
      placeholder="Search"
      contentRight={<Image onClick={() => addTag()} src="/search_icon.svg" alt="search icon" />}
    />
  );
}

export default SearchBar;

/**
 *
      <div class={"d-flex"}>
         {
             tags?.map((tag, index) => {
                 return (
                     <Searchtag key={index}>
                         {tag}
                         <button
                             onClick={() => removeTag(tag)}
                             className="nextui-c-ctQnhE nextui-c-ctQnhE-kEXoss-visible-true nextui-c-ctQnhE-jHlzRu-hasContentRight-true nextui-input-clear-button"
                             type="button">
                             <svg className="" height="24" viewBox="0 0 24 24" width="24">
                                 <path
                                     d="M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z"
                                     fill="currentColor"></path>
                             </svg>
                         </button>
                     </Searchtag>
                 )
             })
          }
      </div>
 //*/