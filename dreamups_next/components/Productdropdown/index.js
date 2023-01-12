import React from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ProductItem } from "./styles";
import Link from "next/link";
import Head from "next/head";



export default function Product(){
    return(
        <div>
            <Head>
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
                </style>
            </Head>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger className="trigger" >
                    <ProductItem>
                        Product
                    </ProductItem>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="content">
                    <div className="child1">
                    <DropdownMenu.Item className="color header " disabled>                       
                        Accelerators and Schools
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="item ">
                        <Link className="bcolor" href="https://startupschool.md/">
                        Startup School
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <Link className="bcolor" href="https://dreamable.md/">
                        Dreamable
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <Link className="bcolor" href="https://upcelerator.md/">
                        Upcelerator
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="align ">
                        <Link className="bcolor" href="https://upnext.md/">
                        UpNext
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="color " disabled>
                        Events
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="item ">
                        <Link className="bcolor" href="https://startupmoldova.digital/events/hackathon-inovatie-pentru-munca-la-distanta/">
                        Catalyst Hackathons
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item >
                        <Link className="bcolor" href="">
                        Dreamicon
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item >
                        <Link className="bcolor" href="https://www.startupgrind.com/chisinau/">
                        Startup Grind Chișinău
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="align ">
                        <Link className="bcolor" href="https://foundersnetwork.com/">
                        Founders Network
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="color " disabled>
                        Smart Capital
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="item align">
                        <Link className="bcolor" href="https://mozaic.md/">
                        Mozaic
                        </Link>
                    </DropdownMenu.Item>
                    </div >
                    <div className="child2">
                   <DropdownMenu.Item className="color header" disabled >
                        Education
                   </DropdownMenu.Item>
                   <DropdownMenu.Item className="item">
                        <Link className="bcolor" href="https://dreamclass.md/">
                        Dreamclass
                        </Link>
                   </DropdownMenu.Item>
                   <DropdownMenu.Item className="align">
                        <Link className="bcolor" href="https://blueprint.md/">
                        Blueprint
                        </Link>
                   </DropdownMenu.Item>
                   <DropdownMenu.Item className="color" disabled>
                        Product Management
                   </DropdownMenu.Item>
                   <DropdownMenu.Item className="item align">
                        <Link className="bcolor" href="">
                        Product School
                        </Link>
                   </DropdownMenu.Item>
                   <DropdownMenu.Item className="color" disabled>
                        Internships
                   </DropdownMenu.Item>
                   <DropdownMenu.Item className="item">
                        <Link className="bcolor" href="">
                        Starships
                        </Link>
                   </DropdownMenu.Item>
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    )
}