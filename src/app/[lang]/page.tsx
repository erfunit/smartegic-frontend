import React from "react";
import { Locale } from "../../../i18n.config";
import { Cards, Main } from "@components";
import { getDictionary } from "@/lib/dictionary";

const Home = async ({
    params: { lang },
}: {
    params: { lang: Locale };
}): Promise<React.JSX.Element> => {
    const dict = await getDictionary(lang);

    return (
        <>
            <Main />
            <div>{dict.hello}</div>
            <Cards />
        </>
    );
};

export default Home;
