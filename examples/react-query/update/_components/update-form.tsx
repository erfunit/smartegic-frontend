import React, { useState } from "react";
import { useUpdateData } from "../_api/update-data";

const UpdateForm = () => {
    const [formData, setFormData] = useState({
        someField: "text",
    });

    const { mutate: updateData, isPending } = useUpdateData({
        onSuccess: () => console.log("Data updated successfully"),
    });

    const handleSubmit = (event: React.FormEvent, id: string) => {
        event.preventDefault();
        updateData({ id, data: formData });
    };

    return (
        <form onSubmit={(e) => handleSubmit(e, "33")}>
            {/* form fields */}
            <input
                aria-label="updated text"
                type="text"
                value={formData.someField}
                onChange={(e) =>
                    setFormData({ ...formData, someField: e.target.value })
                }
            />
            <button type="submit" disabled={isPending}>
                Update
            </button>
        </form>
    );
};

export default UpdateForm;
