import React from "react";

const page = ({ params }) => {
    // getting data from URL in server component.
    console.log(params);
    return (
        <div>
            <h1>this is our product page using dynamic routing.</h1>
        </div>
    );
};

export default page;
