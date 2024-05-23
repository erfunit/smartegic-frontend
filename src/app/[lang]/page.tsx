import React from "react";
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { FormField } from "@/types/form-generator.types";
import RegistrationForm from "./_components/form";

const Home = async ({
    params: { lang },
}: {
    params: { lang: Locale };
}): Promise<React.JSX.Element> => {
    const dict: { form: FormField[] } = await getDictionary(lang);

    return (
        <div className="container max-w-screen-md px-5 py-5 mx-auto lg:px-0">
            <RegistrationForm dict={dict} />
        </div>
    );
};

export default Home;
