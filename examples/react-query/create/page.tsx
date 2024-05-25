import React from "react";
import SignInForm from "./_components/sigin-form";

// ❔ => the server component which is calling a client component (in this case: sign in form)
const page = () => {
    return <SignInForm />;
};

export default page;
