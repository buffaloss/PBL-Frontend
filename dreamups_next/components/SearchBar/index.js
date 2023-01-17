import React, { useEffect, useState } from "react";
import { Input, Image } from "@nextui-org/react";

const SearchBar = ({ onTagsChange, propsTags }) => {
  const [tags, setTags] = useState([...propsTags]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    onTagsChange(tags);
  }, [tags]);

  const addTag = () => {
    if (searchQuery?.length > 0) {
      const localTagsArray = [...propsTags];
      const final = searchQuery.toLowerCase().replace(" ", '');
      localTagsArray.push(final);
      setTags([...localTagsArray]);
      setSearchQuery('');
    }
  }

  const onKeypress = (e) => {
    if (e.key === "Enter") {
      addTag()
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
      onKeyPress={onKeypress}
      placeholder="Search"
      contentRightStyling={{ width: 100 }}
      contentRight={<Image onClick={() => addTag()} style={{ width: "40px" }} src="/search_icon.svg" alt="search icon" />}
    />
  );
}

export default SearchBar;