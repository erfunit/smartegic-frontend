import { PageContainer } from "@/app/_components/containers/page-container";
import React from "react";
import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
// import FormComponent from "@/app/_components/form/form";
import FormComponent from "@/app/_components/form/form";
import { getFormSchema } from "@/app/_components/form-generator/lib/get-form-schema";
import { redirect } from "next/navigation";

const HomePage = async ({
    params: { lang },
}: {
    params: { lang: Locale };
}): Promise<React.JSX.Element> => {
    redirect("/organization");
    const dict = await getDictionary(lang);
    const formSchema = await getFormSchema();

    return (
        <PageContainer
            title={dict.main_page.title}
            subTitle={dict.main_page.subTitle}
        >
            <FormComponent formSchema={formSchema.fields} />
        </PageContainer>
    );
};

export default HomePage;
