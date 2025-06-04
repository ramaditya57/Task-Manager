import {
    LuLayoutDashboard,
    LuUsers,
    LuClipboardCheck,
    LuSquarePlus,
    LuLogOut,
} from "react-icons/lu";

export const SIDE_MENU_DATA = [
    {
        id: '01',
        name: "Dashboard",
        icon: LuLayoutDashboard,
        path: "/admin/dashboard",
    },
    {
        id: '02',
        name: "Manage Tasks",
        icon: LuClipboardCheck,
        path: "/admin/tasks",
    },
    {
        id: '03',
        name: "Create Task",
        icon: LuSquarePlus,
        path: "/admin/create-task",
    },
    {
        id: '04',
        name: "Team Members",
        icon: LuUsers,
        path: "/admin/users",
    },
    {
        id: '05',
        name: "Logout",
        icon: LuLogOut,
        isLogout: true,
    },
];

export const SIDE_MENU_USER_DATA = [
    {
        id: '01',
        name: "Dashboard",
        icon: LuLayoutDashboard,
        path: "/user/dashboard",
    },
    {
        id: '02',
        name: "My Tasks",
        icon: LuClipboardCheck,
        path: "/user/my-tasks",
    },
    {
        id: '05',
        name: "Logout",
        icon: LuLogOut,
        isLogout: true,
    },
];

export const PRIORITY_DATA = [
    {label: 'Low', value: 'Low'},
    {label: 'Medium', value: 'Medium'},
    {label: 'High', value: 'High'},
]

export const STATUS_DATA = [
    {label: 'Pending', value: 'Pending'},
    {label: 'In Progress', value: 'In Progress'},
    {label: 'Completed', value: 'Completed'},
]