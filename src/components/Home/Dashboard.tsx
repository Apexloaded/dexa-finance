"use client";

import React, { useState } from "react";
import TabsRoot from "../Tabs/TabsRoot";
import TabsList from "../Tabs/TabsList";
import TabsHeader from "../Tabs/TabsHeader";
import TabsContent from "../Tabs/TabsContent";
import WalletTab from "./WalletTab";

function Dashboard() {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const onTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <TabsRoot>
      <TabsList className="sticky top-[4.24rem] z-50 bg-white px-5 shadow-sm border-b border-light pb-1">
        <TabsHeader
          className="text-left"
          isActiveText={true}
          title="Overview"
          value="tab1"
          activeTabId={activeTab}
          onTabChange={onTabChange}
          isCenter={false}
        />
        {/* <TabsHeader
          isActiveText={true}
          title="Savings"
          value="tab2"
          activeTabId={activeTab}
          onTabChange={onTabChange}
          isCenter={false}
        />
        <TabsHeader
          isActiveText={true}
          title="Borrow"
          value="tab3"
          activeTabId={activeTab}
          onTabChange={onTabChange}
          isCenter={false}
        /> */}
      </TabsList>
      <TabsContent value="tab1" activeTabId={activeTab}>
        <div className="flex">
          <WalletTab />
        </div>
      </TabsContent>
      {/* <TabsContent value="tab2" activeTabId={activeTab}>
        <div className="flex mt-5">
          <Savings />
        </div>
      </TabsContent>
      <TabsContent value="tab3" activeTabId={activeTab}>
        <div className="flex">3</div>
      </TabsContent> */}
    </TabsRoot>
  );
}

export default Dashboard;
