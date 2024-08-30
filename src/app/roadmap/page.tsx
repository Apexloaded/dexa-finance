"use client";

import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import NavBar from "@/components/ui/NavBar";
import { CheckCircle } from "lucide-react";
import React, { useState } from "react";

export default function Roadmap() {
  const roadmapItems = [
    {
      title: "Hackathon Completetion",
      description:
        "Build a Minimum Viable Project (MVP) to showcase BNB Q3 Hackathon",
      tasks: [
        "Develop basic smart contracts for handling decentralized payments",
        "Create a simple UI for interacting with the smart contracts",
        "Integrate with Binance Smart Chain",
        "Test basic dApp functionalities such as wallet connection, payment processing and transaction confirmation",
      ],
      date: "Phase 1",
      status: "Completed",
    },
    {
      title: "Post-Hackathon Refinement & Initial Development",
      description:
        "Refine the MVP based on feedback received and start adding essential features",
      tasks: [
        "Gather and analyze feedback from judges and community contributors",
        "Refactor and optimize smart contracts for security and efficiency",
        "Improve the UI/UX based on feedback, focusing on usability and simplicity",
        "Start developing additional features such as Account Abstraction and Payment Gateway",
        "Develop an open API for advanced users and customers who wish to accept BSC tokens on their websites",
        "Implement initial security audits and testing protocols",
        "Develop a basic API documentation",
      ],
      date: "Phase 2",
      status: "In Progress",
    },
    {
      title: "Feature Expansion and Beta Testing",
      description: "Expand functionality and prepare for a wider beta release",
      tasks: [
        "Add support for recurring payments and subscriptions",
        "Implement multi-language support for global accessibility",
        "Develop merchant tools and dashboards for easy transaction tracking and manangement",
        "Integrate advanced security features such as multi-signature wallets and two factor authentication (2FA)",
        "Conduct thorough internal testing and fix any bugs or performance issues",
        "Launch a closed beta test with selected users and partners to gather detailed feedback",
        "Develop marketing and educational materials for user onboarding",
      ],
      date: "Phase 3",
      status: "Upcoming",
    },
    {
      title: "Public Beta & Community Building",
      description:
        "Launch a public beta version and build a community around the platform",
      tasks: [
        "Launch the public beta and open registration for users and merchants",
        "Host community events such as webinars, AMAs and workshops",
        "Develop a rewards or incentive program to encourage early adoption",
        "Expand marketing efforts to raise awareness about Dexa Fiance and attract more users",
        "Build strategic partnerships with blockchain projects, wallets and payment processors",
      ],
      date: "Phase 4",
      status: "Planned",
    },
    {
      title: "Full Launch and Scaling",
      description:
        "Launch the full version of DexaFi and scale the platform to support a growing user base",
      tasks: [
        "Officially launch the full version of DexaFi with a robust set of features",
        "Scale the infrastructur to handle increased traffic and transaction volumes",
        "Enhanced customer support services, including live chat and extensive documentation",
        "Implement advanced analytics tools for merchants and users to monitor and optimize transactions",
        "Introduce additional payment option such as fiat-to-crypto gateways",
      ],
      date: "Phase 5",
      status: "Planned",
    },
  ];

  return (
    <Container>
      <Section>
        <div className="overflow-y-scroll h-svh relative">
          <NavBar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {roadmapItems.map((item, index) => (
                  <div
                    key={index}
                    className={`mb-8 flex justify-between items-center w-full ${
                      index % 2 === 0
                        ? "flex-row-reverse left-timeline"
                        : "right-timeline"
                    }`}
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-primary shadow-2xl w-20 h-20 rounded-full">
                      <h1 className="mx-auto font-semibold text-5xl text-white">
                        {index + 1}
                      </h1>
                    </div>
                    <div className="order-1 w-5/12 px-6 py-4 bg-light shadow-2xl border border-primary rounded-md">
                      <div>
                        <h3 className="font-bold text-2xl">{item.title}</h3>
                        <p className="text-primary text-xl">{item.date}</p>
                      </div>
                      <div>
                        <p className="text-base mt-2 leading-snug tracking-wide text-medium text-opacity-100">
                          {item.description}
                        </p>
                        <div className="mt-4">
                          <ul>
                            {item.tasks.map((task) => (
                              <li className="flex items-start gap-2 mb-2">
                                <CheckCircle
                                  size={18}
                                  className="text-primary mt-2"
                                />{" "}
                                <p className="flex-1">{task}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div
                          className={`mt-8 inline-block px-3 rounded-md ${item.status === 'Completed' ? 'bg-primary text-white' : 
                               item.status === 'In Progress' ? 'bg-success text-white' : 'bg-warning text-dark'}`}
                        >
                          {item.status}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </Section>
    </Container>
    // <div className="min-h-screen bg-background flex flex-col">
    //   <header className="border-b">
    //     <div className="container mx-auto px-4 py-6">
    //       <h1 className="text-3xl font-bold text-primary">Project Roadmap</h1>
    //     </div>
    //   </header>

    //   <footer className="border-t">
    //     <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
    //       © 2024 Your Company Name. All rights reserved.
    //     </div>
    //   </footer>
    // </div>
  );
}
