import { GridBox } from "@/app/_components/containers/grid-box";
import { GridItem } from "@/app/_components/containers/grid-item";
import { PageContainer } from "@/app/_components/containers/page-container";
import React from "react";

const page = () => {
    return (
        <PageContainer title="second page">
            <GridBox>
                <GridItem />
                <GridItem />
            </GridBox>
        </PageContainer>
    );
};

export default page;
