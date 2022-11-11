import { SearchWrapper } from "./styles"
import React from "react";
import { Input} from "@nextui-org/react";


const SearchBar = () => {
    return (

        <>
        <div >
        <SearchWrapper >
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Search..."
            contentRight={<img src= "/search_icon.svg" alt ="search icon"></img>}
          />
          </SearchWrapper>
        </div>
        </>
    );
    }

export default SearchBar;