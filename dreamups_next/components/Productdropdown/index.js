import React from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ProductItem } from "./styles";



export default function Product(){
    return(
        <div>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger className="trigger" >
                    <ProductItem>
                        Product
                    </ProductItem>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="content">
                    <DropdownMenu.Item className="color header" disabled>
                        Accelerators and Schools
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="item">
                        Startup School
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        Dreamable
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        Upcelerator
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="align">
                        UpNext
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="color" disabled>
                        Events
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="item">
                        Catalyst Hackathons
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        Dreamicon
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        Startup Grind Chișinău
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="align">
                        Founders Network
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="color" disabled>
                        Smart Capital
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="item align">
                        Mozaic
                    </DropdownMenu.Item>
                   

                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    )
}