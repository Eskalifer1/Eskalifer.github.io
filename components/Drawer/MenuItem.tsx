import MenuItem from "antd/es/menu/MenuItem"
import Item from "./Item"
import { MenuProps } from "antd"

type MenuItem = Required<MenuProps>['items'][number];

const classLink = "block font-[Chivo] text-2xl font-bold text-white"

export const MenuItems: MenuItem[] = [
    {
        label: (<p className={`${classLink} hover:text-black`}>Categories</p>), key: '1', children: [
            {
                label: (<p className={`${`${classLink} hover:text-black`}`}>Art</p>), key: '12', children: [
                    { label: (<Item label='Design' classes={classLink} />), key: '23', children: undefined }
                ]
            },
            { label: (<Item label='Auto Help' classes={classLink} />), key: '13', children: undefined },
            { label: (<Item label='Biographies' classes={classLink} />), key: '14', children: undefined },
            { label: (<Item label='Comics' classes={classLink} />), key: '15', children: undefined },
            { label: (<Item label='Economy' classes={classLink} />), key: '16', children: undefined },
            { label: (<Item label='Essay' classes={classLink} />), key: '17', children: undefined },
            { label: (<Item label='Investigation' classes={classLink} />), key: '18', children: undefined },
            {
                label: (<p className={`${classLink} hover:text-black`}>Narrative</p>), key: '19', children: [
                    { label: (<Item label='Novel' classes={classLink} />), key: '24', children: undefined },
                    { label: (<Item label='Poetry' classes={classLink} />), key: '25', children: undefined },
                    { label: (<Item label='Stories' classes={classLink} />), key: '26', children: undefined },
                    { label: (<Item label='Theatry' classes={classLink} />), key: '27', children: undefined },
                ]
            },
            { label: (<Item label='Psyhology' classes={classLink} />), key: '20', children: undefined },
            { label: (<Item label='Philosophy' classes={classLink} />), key: '21', children: undefined },
            { label: (<Item label='Sociology' classes={classLink} />), key: '22', children: undefined },
        ]
    },
    { label: (<Item label='Shop' classes={classLink} />), key: '2', children: undefined },
    { label: (<Item label='Blog' classes={classLink} href='blog' />), key: '3', children: undefined },
    { label: (<Item label='Cart' classes={classLink} />), key: '4', children: undefined },
    { label: (<Item label='Checkout' classes={classLink} />), key: '5', children: undefined },
    { label: (<Item label='All Book Categories' classes={classLink} />), key: '6', children: undefined },
    { label: (<Item label='All Book Authors' classes={classLink} />), key: '7', children: undefined },
    { label: (<Item label='Contact' classes={classLink} />), key: '8', children: undefined },
    { label: (<Item label='Sample Page' classes={classLink} />), key: '9', children: undefined },
    { label: (<Item label='Privacy Policy' classes={classLink} />), key: '10', children: undefined },
    { label: (<Item label='404' classes={classLink} />), key: '11', children: undefined },
]