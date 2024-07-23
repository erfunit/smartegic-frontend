import { PageContainer } from "@/app/_components/containers/page-container";
import { Table } from "@/app/_components/table";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import getOrganizations from "@/lib/organization/get-organizations";
import React from "react";

const page = async ({
    params: { lang },
}: {
    params: { lang: Locale };
}): Promise<React.JSX.Element> => {
    const dict = await getDictionary(lang);
    const organizations = await getOrganizations();

    const columns = [
        // { Header: "ID", accessor: "id" as keyof User },
        { Header: "Name", accessor: "name" },
        { Header: "Username", accessor: "username" },
        { Header: "Email", accessor: "email" },
    ];

    return (
        <PageContainer title={dict.second_page.title}>
            <Table
                data={organizations}
                // apiEndpoint="https://jsonplaceholder.typicode.com/users"
                columns={columns}
                pageSize={10}
                // loading={loading}
            />
        </PageContainer>
    );
};

export default page;
