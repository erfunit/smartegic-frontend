import { PageContainer } from "@/app/_components/containers/page-container";
import Users from "@/app/_components/table/users";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import React from "react";

const page = async ({
    params: { lang },
}: {
    params: { lang: Locale };
}): Promise<React.JSX.Element> => {
    const dict = await getDictionary(lang);
    return (
        <PageContainer title={dict.second_page.title}>
            <Users />
        </PageContainer>
    );
};

export default page;
