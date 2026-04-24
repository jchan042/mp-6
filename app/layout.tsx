import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
  title: "CS391 OAuth",
  description: "OAuth Demo",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#f6f8fa" }}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
      </html>
  );
}