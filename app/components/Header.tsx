"use client";
import styled from "styled-components";
import Link from "next/link";

const Nav = styled.header`
  background-color: #24292f;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d0d7de;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 35px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: #cdd9e5;
  }
`;

export default function Header() {
    return (
        <Nav>
            <Logo href="/">CS391 OAuth</Logo>
        </Nav>
    );
}