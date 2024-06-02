export const getInputType = (type: string, show: boolean) => {
    if (type === "password" && !show) return "password";
    if (type === "password" && show) return "text";
    return type;
};
