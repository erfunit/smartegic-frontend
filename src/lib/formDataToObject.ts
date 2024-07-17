export function formDataToObject<T extends Record<string, any>>(
    formData: FormData,
): T {
    const obj = {} as T;
    formData.forEach((value, key) => {
        if (key in obj) {
            const existing = obj[key as keyof T];
            if (Array.isArray(existing)) {
                existing.push(value);
            } else {
                obj[key as keyof T] = [
                    existing,
                    value,
                ] as unknown as T[keyof T];
            }
        } else {
            obj[key as keyof T] = value as unknown as T[keyof T];
        }
    });
    return obj;
}
