"use client";

import React from "react";
import Welcome from "@/components/Home/HomeSlides/Welcome";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <Container>
      <Section>
        <div className="overflow-y-scroll h-svh relative">
          <NavBar />
          <Welcome />
        </div>
      </Section>
    </Container>
  );
}
