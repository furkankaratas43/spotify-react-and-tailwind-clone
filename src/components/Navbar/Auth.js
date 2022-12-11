import {Menu} from '@headlessui/react'
import {Icon} from "Icons";

function Auth() {
    const user = {
        name: "Furkan Karataş",
        avatar: "https://i.scdn.co/image/ab6775700000ee85082ba6a3c1c26e8817a4a4ec"
    }
    return (
        <Menu as="nav" className={"relative"}>
            {({open}) => (
                <>
                    <Menu.Button
                        className={`flex items-center h-8 rounded-3xl pr-2 ${open ? "bg-active" : "bg-black"} hover:bg-active`}>
                        <img src={user.avatar} className={"h-8 w-8 rounded-full p-0.5 mr-2"} alt="" />
                        <span className={"text-sm font-semibold mr-2"}>{user.name}</span>
                        <span className={open && "rotate-180"}>
                            <Icon name="down-dir" size={16}/>
                        </span>
                    </Menu.Button>
                    <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded-md translate-y-2"}>
                        <Menu.Item>
                            {({active}) => (
                                <a href={"foo"} className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                    Account
                                    <Icon name="external" size={16}/>

                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <a href={"foo"} className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                    Profile
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <a href={"foo"} className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                    Logout
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}

export default Auth