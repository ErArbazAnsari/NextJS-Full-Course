import { redirect } from "next/navigation";
import React from "react";

const page = () => {
    const userProfileInfo = null;
    if (userProfileInfo === null) redirect("/?search=profile-not-found");
    return (
        <div>
            <h1>Account Page</h1>
        </div>
    );
};

export default page;
