import { GridBox } from "@/app/_components/containers/grid-box";
import { GridItem } from "@/app/_components/containers/grid-item";
import { PageContainer } from "@/app/_components/containers/page-container";
import React from "react";
// import { Locale } from "../../../i18n.config";
// import FormComponent from "../_components/form";

// import { getDictionary } from "@/lib/dictionary";
// import { FormField } from "@/types/form-generator";
// import RegistrationForm from "./_components/form";

const Home = async (): // {
// params: { lang },
// }: {
// params: { lang: Locale };
// },
Promise<React.JSX.Element> => {
    // const dict: { test_form: FormField[] } = await getDictionary(lang);

    return (
        <PageContainer
            title="Customers information"
            subTitle="You can track your customers information and reports within this page"
        >
            <GridBox
                cols={{
                    sm: 1,
                    lg: 3,
                }}
                rows={{
                    sm: 3,
                    lg: 1,
                }}
            >
                <GridItem />
                <GridItem />
                <GridItem />
            </GridBox>
            <GridBox cols="2">
                <GridItem />
                <GridItem />
            </GridBox>
            <GridBox cols="1">
                <GridItem />
            </GridBox>
        </PageContainer>
    );
};

export default Home;
