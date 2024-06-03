// import { GridBox } from "@/app/_components/containers/grid-box";
// import { GridItem } from "@/app/_components/containers/grid-item";
import { PageContainer } from "@/app/_components/containers/page-container";
import React from "react";
import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
import FormComponent from "@/app/_components/form/form";
// import FormComponent from "@/app/_components/form/form";
// import PhoneInput from "react-phone-number-input";
// import TextInput from "@/app/_components/text-input/text-input";

const Home = async ({
    params: { lang },
}: {
    params: { lang: Locale };
}): Promise<React.JSX.Element> => {
    const dict = await getDictionary(lang);

    return (
        <PageContainer
            title={dict.main_page.title}
            subTitle={dict.main_page.subTitle}
        >
            <FormComponent formSchema={dict.form_generator} />
        </PageContainer>
    );
};

export default Home;
