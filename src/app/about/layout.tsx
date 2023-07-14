import React from "react"
function AboutLayout({
    children,
}: {
    children: React.ReactNode
}

) {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}
export default AboutLayout;