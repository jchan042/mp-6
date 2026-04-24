"use client";
import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";

interface UserInfo {
    name: string;
    email: string;
    picture: string;
    username: string;
}

export default function UserFetcher({ code }: { code: string }) {
    const [user, setUser] = useState<UserInfo | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`/api/auth/google/callback?code=${encodeURIComponent(code)}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.error) setError(data.error);
                else setUser(data);
            })
            .catch(() => setError("Something went wrong"));
    }, []);

    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
    if (!user) return <p style={{ color: "#57606a", fontSize: "1rem" }}>Loading...</p>;

    return <UserCard user={user} />;
}