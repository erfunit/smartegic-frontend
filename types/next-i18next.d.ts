declare module "next-i18next" {
    export function appWithTranslation<P>(
        Component: React.ComponentType<P>,
    ): React.ComponentType<P>;
    export function serverSideTranslations(
        locale: string,
        namespacesRequired?: string[],
    ): Promise<any>;
    export class NextI18Next {
        constructor(config: any);
    }
    export const Trans: any;
    export const Link: any;
    export const Router: any;
    export const i18n: any;
    export const useTranslation: any;
    export const withTranslation: any;
    export const Translation: any;
}
