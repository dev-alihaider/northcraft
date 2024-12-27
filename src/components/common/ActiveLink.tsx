'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React from 'react';

interface ActiveLinkProps {
    href: string;
    children: React.ReactNode;
    activeClassName?: string;
    className?: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
                                                   href, children, activeClassName, className = '',
                                               }) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (<Link
            href={href}
            className={`${className} ${isActive ? activeClassName : 'text-white'}`}
        >
            {children}
        </Link>);
};

export default ActiveLink;
