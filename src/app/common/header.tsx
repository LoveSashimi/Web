import React from "react";
import Link from "next/link";

function Header() {
    return(
        <React.Fragment>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about"> About </Link></li>
                    <li><Link href="/contact"> Contact us </Link> </li>
                </ul>
            </nav>
        </React.Fragment>
    );
}


export default Header;