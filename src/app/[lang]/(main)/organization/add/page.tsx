import { PageContainer } from "@/app/_components/containers/page-container";
import React from "react";
import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
import FormComponent from "./_components/form";
import getFormSchema from "@/lib/schema/get-schema";

const AddOrganizationPage = async ({
    params: { lang },
}: {
    params: { lang: Locale };
}): Promise<React.JSX.Element> => {
    const dict = await getDictionary(lang);
    const formSchema = await getFormSchema("organization");

    return (
        <PageContainer
            title={dict.organization_page.title}
            subTitle={dict.organization_page.subTitle}
        >
            {formSchema && <FormComponent formSchema={formSchema.fields} />}
        </PageContainer>
    );
};

export default AddOrganizationPage;
