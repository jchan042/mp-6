import Header from "./components/Header";
import SignInCard from "./components/SignInCard";

export default function Home() {
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#f6f8fa" }}>
            <Header />
            <main style={{ display: "flex", justifyContent: "center", marginTop: "80px", padding: "0 16px" }}>
                <SignInCard />
            </main>
        </div>
    );
}