import { GridBox } from "@/app/_components/containers/grid-box";
import { GridItem } from "@/app/_components/containers/grid-item";
import { PageContainer } from "@/app/_components/containers/page-container";
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
            <GridBox>
                <GridItem />
                <GridItem />
            </GridBox>
        </PageContainer>
    );
};

export default page;
