"use client";

import React, { useState, useEffect } from "react";
import { Table } from "./table";

type User = {
    id: number;
    name: string;
    age: number;
    email: string;
};

const Users: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        setLoading(true);
        // Replace with your API endpoint
        const apiEndpoint = "https://jsonplaceholder.typicode.com/users";
        fetch(apiEndpoint)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch(() => {
                // console.error("Error fetching data:", error);
            })
            .finally(() => {
                setLoading(() => false);
            });
    }, []);

    const columns = [
        // { Header: "ID", accessor: "id" as keyof User },
        { Header: "Name", accessor: "name" as keyof User },
        { Header: "Username", accessor: "username" as keyof User },
        { Header: "Email", accessor: "email" as keyof User },
    ];

    return (
        <div className="Users">
            <Table
                data={users}
                // apiEndpoint="https://jsonplaceholder.typicode.com/users"
                columns={columns}
                pageSize={10}
                loading={loading}
            />
        </div>
    );
};

export default Users;
