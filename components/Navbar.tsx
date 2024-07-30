import {Menubar, MenubarMenu, MenubarTrigger} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex items-center">
            <div className="flex-grow flex justify-center">
                <Menubar className="bg-inherit border-none">
                    <Link href="">
                        <MenubarMenu>
                            <MenubarTrigger>Home</MenubarTrigger>
                        </MenubarMenu>
                    </Link>
                    <Link href="">
                        <MenubarMenu>
                            <MenubarTrigger>File</MenubarTrigger>
                        </MenubarMenu>
                    </Link>
                    <Link href="">
                        <MenubarMenu>
                            <MenubarTrigger>Edit</MenubarTrigger>
                        </MenubarMenu>
                    </Link>
                    <Link href="">
                        <MenubarMenu>
                            <MenubarTrigger>Help</MenubarTrigger>
                        </MenubarMenu>
                    </Link>
                </Menubar>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="text-black">CB</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default Navbar;
