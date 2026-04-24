import Header from "../../components/Header";
import UserFetcher from "./UserFetcher";

export default async function CallbackPage({
                                               searchParams,
                                           }: {
    searchParams: Promise<{ code?: string }>;
}) {
    const params = await searchParams;

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#f6f8fa" }}>
            <Header />
            <main style={{ display: "flex", justifyContent: "center", marginTop: "80px", padding: "0 16px" }}>
                {!params.code ? (
                    <p style={{ color: "red" }}>Error: No authorization code received.</p>
                ) : (
                    <UserFetcher code={params.code} />
                )}
            </main>
        </div>
    );
}