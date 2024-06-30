import React, { useState } from "react";
import { Bills } from "@/interfaces/bills.interface";
import TabsHeader from "@/components/Tabs/TabsHeader";
import TabsList from "@/components/Tabs/TabsList";
import TabsRoot from "@/components/Tabs/TabsRoot";
import TabsContent from "@/components/Tabs/TabsContent";
import InfoTab from "./InfoTab";
import BillTnxsTab from "./BillTnxsTab";
import BillRemiteTab from "./BillRemiteTab";
import ParticipantTab from "./ParticipantTab";

type Props = {
  bill: Bills;
};
function BillTabs({ bill }: Props) {
  const [activeTab, setActiveTab] = useState("tab1");
  const tabs = [
    { id: "tab1", label: "Overview" },
    { id: "tab2", label: "Transactions" },
    { id: "tab3", label: "Participants" },
    { id: "tab4", label: "Remittances" },
  ];

  const onTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  return (
    <TabsRoot>
      <TabsList className="">
        {tabs.map((tab) => (
          <TabsHeader
            key={tab.id}
            isActiveText={true}
            title={tab.label}
            value={tab.id}
            activeTabId={activeTab}
            onTabChange={onTabChange}
            isCenter={false}
          />
        ))}
      </TabsList>
      <TabsContent value="tab1" activeTabId={activeTab}>
        <div className="flex-1 mt-3">
          <InfoTab bill={bill} />
        </div>
      </TabsContent>
      <TabsContent value="tab2" activeTabId={activeTab}>
        <div className="flex-1 mt-3">
          <BillTnxsTab bill={bill} />
        </div>
      </TabsContent>
      <TabsContent value="tab3" activeTabId={activeTab}>
        <div className="flex-1 mt-3">
          <ParticipantTab bill={bill} />
        </div>
      </TabsContent>
      <TabsContent value="tab4" activeTabId={activeTab}>
        <div className="flex-1 mt-3">
          <BillRemiteTab bill={bill} />
        </div>
      </TabsContent>
    </TabsRoot>
  );
}

export default BillTabs;
