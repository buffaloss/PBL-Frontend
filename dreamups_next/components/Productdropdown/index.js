import React from "react";
import { Dropdown } from "@nextui-org/react";
import { ProductItem } from "./styles";



export default function Product(){
    return(
        <Dropdown>
            <Dropdown.Button light>
                <ProductItem>
                    Product
                </ProductItem>
            </Dropdown.Button>
        </Dropdown>
    )
}