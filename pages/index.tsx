import React from "react";
import { Cards, Container, Footer, Header, Main } from "@components";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: React.FC = () => {
    const { t } = useTranslation("common");
    return (
        <Container>
            <Header />
            <div>
                <h1>{t("hello")}</h1>
                <p>{t("greet", { name: "John" })}</p>
                <a href="https://documentation-link">{t("documentation")}</a>
            </div>
            <Main />
            <Cards />
            <Footer />
        </Container>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale as string, ["common"])),
    },
});

export default Home;
