import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import UserCard from "../../components/UserCard";

interface UserInfo {
    name: string;
    email: string;
    picture: string;
}

async function getUserInfo(code: string): Promise<UserInfo> {
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            code,
            client_id: process.env.GOOGLE_CLIENT_ID!,
            client_secret: process.env.GOOGLE_CLIENT_SECRET!,
            redirect_uri: process.env.REDIRECT_URI!,
            grant_type: "authorization_code",
        }),
    });

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    const userRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    return userRes.json();
}

export default async function CallbackPage({
                                               searchParams,
                                           }: {
    searchParams: Promise<{ code?: string }>;
}) {
    const params = await searchParams;

    if (!params.code) {
        return (
            <div style={{ minHeight: "100vh", backgroundColor: "#f6f8fa" }}>
                <Header />
                <main style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
                    <p style={{ color: "red" }}>Error: No authorization code received.</p>
                </main>
            </div>
        );
    }

    const user = await getUserInfo(params.code);

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#f6f8fa" }}>
            <Header />
            <main style={{ display: "flex", justifyContent: "center", marginTop: "80px", padding: "0 16px" }}>
                <UserCard user={user} />
            </main>
        </div>
    );
}