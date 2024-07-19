"use client";

import React from "react";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import NavBar from "@/components/ui/NavBar";

export default function About() {
  return (
    <Container>
      <Section>
        <div className="overflow-y-scroll h-svh relative">
          <NavBar />

        </div>
      </Section>
    </Container>
  );
}
