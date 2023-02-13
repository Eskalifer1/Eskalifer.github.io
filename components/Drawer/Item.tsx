import Link from 'next/link';
import React from 'react';

type PropsType = {
    label: string
    classes: string
    href?: string
}

const Item: React.FC<PropsType> = ({label, classes, href='#'}) => {
    return (
        <Link href={href} className={classes}>{label}</Link>
    );
};

export default Item;