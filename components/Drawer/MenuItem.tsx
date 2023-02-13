import MenuItem from "antd/es/menu/MenuItem"
import classes from '@/styles/Navigation.module.css'
import Item from "./Item"
import { MenuProps } from "antd"

type MenuItem = Required<MenuProps>['items'][number];

export const MenuItems: MenuItem[] = [
    {
        label: (<p className={`${classes.link} Drawer__Item__Link`}>Categories</p>), key: '1', children: [
            {
                label: (<p className={`${classes.link} Drawer__Item__Link`}>Art</p>), key: '12', children: [
                    { label: (<Item label='Design' classes={classes.link} />), key: '23', children: undefined }
                ]
            },
            { label: (<Item label='Auto Help' classes={classes.link} />), key: '13', children: undefined },
            { label: (<Item label='Biographies' classes={classes.link} />), key: '14', children: undefined },
            { label: (<Item label='Comics' classes={classes.link} />), key: '15', children: undefined },
            { label: (<Item label='Economy' classes={classes.link} />), key: '16', children: undefined },
            { label: (<Item label='Essay' classes={classes.link} />), key: '17', children: undefined },
            { label: (<Item label='Investigation' classes={classes.link} />), key: '18', children: undefined },
            {
                label: (<p className={`${classes.link} Drawer__Item__Link`}>Narrative</p>), key: '19', children: [
                    { label: (<Item label='Novel' classes={classes.link} />), key: '24', children: undefined },
                    { label: (<Item label='Poetry' classes={classes.link} />), key: '25', children: undefined },
                    { label: (<Item label='Stories' classes={classes.link} />), key: '26', children: undefined },
                    { label: (<Item label='Theatry' classes={classes.link} />), key: '27', children: undefined },
                ]
            },
            { label: (<Item label='Psyhology' classes={classes.link} />), key: '20', children: undefined },
            { label: (<Item label='Philosophy' classes={classes.link} />), key: '21', children: undefined },
            { label: (<Item label='Sociology' classes={classes.link} />), key: '22', children: undefined },
        ]
    },
    { label: (<Item label='Shop' classes={classes.link} />), key: '2', children: undefined },
    { label: (<Item label='Blog' classes={classes.link} href='/' />), key: '3', children: undefined },
    { label: (<Item label='Cart' classes={classes.link} />), key: '4', children: undefined },
    { label: (<Item label='Checkout' classes={classes.link} />), key: '5', children: undefined },
    { label: (<Item label='All Book Categories' classes={classes.link} />), key: '6', children: undefined },
    { label: (<Item label='All Book Authors' classes={classes.link} />), key: '7', children: undefined },
    { label: (<Item label='Contact' classes={classes.link} />), key: '8', children: undefined },
    { label: (<Item label='Sample Page' classes={classes.link} />), key: '9', children: undefined },
    { label: (<Item label='Privacy Policy' classes={classes.link} />), key: '10', children: undefined },
    { label: (<Item label='404' classes={classes.link} />), key: '11', children: undefined },
]