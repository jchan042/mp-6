"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

interface UserInfo {
    name: string;
    email: string;
    picture: string;
}

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

const Avatar = styled(Image)`
  border-radius: 50%;
  border: 2px solid #d0d7de;
`;

const Name = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: #24292f;
  margin: 0;
`;

const Email = styled.p`
  font-size: 20px;
  color: #57606a;
  margin: 0;
`;

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #d0d7de;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  color: #1a7f37;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #1a7f37;
  display: inline-block;
`;

const SignOutButton = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

export default function UserCard({ user }: { user: UserInfo }) {
    return (
        <Card>
            <Avatar
                src={user.picture}
                alt="Profile"
                width={96}
                height={96}
            />
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "6px" }}>
                <Name>{user.name}</Name>
                <Email>{user.email}</Email>
            </div>
            <Divider />
            <Badge>
                <Dot />
                Signed in with Google
            </Badge>
            <SignOutButton href="/">
                Sign out
            </SignOutButton>
        </Card>
    );
}