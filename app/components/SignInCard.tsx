"use client";
import styled from "styled-components";
import Link from "next/link";

const Card = styled.div`
  background: white;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 40px;
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.08);
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
  color: #24292f;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #57606a;
  margin: 0;
  text-align: center;
`;

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #d0d7de;
`;

const GoogleButton = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #f6f8fa;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  padding: 10px;
  color: #24292f;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #eaeef2;
  }
`;

export default function SignInCard() {
    return (
        <Card>
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "6px" }}>
                <Title>OAuth Demo</Title>
                <Subtitle>Sign in with your preferred provider</Subtitle>
            </div>

            <Divider />

            <GoogleButton href="/api/auth/google">
                <svg width="18" height="18" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.08-6.08C34.5 3.09 29.56 1 24 1 14.82 1 7.01 6.7 3.88 14.6l7.08 5.5C12.58 13.71 17.85 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.1 24.5c0-1.64-.15-3.22-.42-4.74H24v8.98h12.42c-.54 2.9-2.18 5.36-4.65 7.02l7.18 5.57C43.18 37.3 46.1 31.36 46.1 24.5z"/>
                    <path fill="#FBBC05" d="M10.96 28.1A14.55 14.55 0 0 1 9.5 24c0-1.42.24-2.8.66-4.1l-7.08-5.5A23.94 23.94 0 0 0 0 24c0 3.86.92 7.5 2.54 10.73l8.42-6.63z"/>
                    <path fill="#34A853" d="M24 47c5.56 0 10.22-1.84 13.63-5l-7.18-5.57c-1.84 1.23-4.2 1.96-6.45 1.96-6.15 0-11.36-4.15-13.22-9.76l-8.42 6.63C7.01 41.3 14.82 47 24 47z"/>
                </svg>
                Sign in with Google
            </GoogleButton>
        </Card>
    );
}