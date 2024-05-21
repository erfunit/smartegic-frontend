import { useRouter } from "next/router";

const LanguageSwitcher: React.FC = () => {
    const router = useRouter();
    // const { locale, locales, asPath } = router;
    // const { t } = useTranslation("common");
    return (
        <div>
            <select
                onChange={(e) =>
                    router.push(
                        {
                            pathname: router.pathname,
                            query: router.query,
                        },
                        null,
                        { locale: e.target.value },
                    )
                }
            >
                <option value="en">English</option>
                <option value="fa">فارسی</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
