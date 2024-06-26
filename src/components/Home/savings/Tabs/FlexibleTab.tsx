import React from "react";
import EstTotalValue from "../EstTotalValue";
import Button from "@/components/Form/Button";
import { PlusIcon } from "lucide-react";
import TabsRoot from "@/components/Tabs/TabsRoot";
import TabsList from "@/components/Tabs/TabsList";
import TabsHeader from "@/components/Tabs/TabsHeader";
import TabsContent from "@/components/Tabs/TabsContent";

function FlexibleTab() {
  const [activeTab, setActiveTab] = React.useState("tab1");

  const onTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  return (
    <div className="w-full flex-1">
      <div className="px-5 flex items-start justify-between">
        <EstTotalValue />
        <Button kind="primary" size="LARGE" className="h-[2.5rem]">
          <p className="flex items-center gap-x-1">
            <PlusIcon size={18} />
            <span>Quick Save</span>
          </p>
        </Button>
      </div>
      <div className="px-5 mt-3 flex items-center gap-x-20">
        <div>
          <p className="text-medium text-sm">Interest APR</p>
          <p className="text-primary text-sm">
            3% <span className="text-dark">Max</span>
          </p>
        </div>
        <div>
          <p className="text-medium text-sm">Interest coming in 16 days</p>
          <p className="text-dark text-sm">
            <span className="text-primary font-bold">4 USDT</span> at (3% p.a)
          </p>
        </div>
      </div>

      <div className="mt-5 flex px-5">
        <div className="w-full flex gap-x-2 lg:gap-x-5">
          <Button kind="primary" className="border border-primary">
            <p className="text-sm">Top up</p>
          </Button>
          <Button kind="default" className="border border-primary">
            <p className="text-primary text-sm">Redeem</p>
          </Button>
          <Button kind="default" className="border border-primary">
            <p className="text-primary text-sm">Claim Reward</p>
          </Button>
        </div>
      </div>
      <div className="pt-8 px-5 pb-20">
        <TabsRoot>
          <TabsList className="">
            <TabsHeader
              isActiveText={true}
              title="All"
              value="tab1"
              activeTabId={activeTab}
              onTabChange={onTabChange}
              isCenter={false}
              //isActiveBg={true}
            />
            <TabsHeader
              isActiveText={true}
              title="Credits"
              value="tab2"
              activeTabId={activeTab}
              onTabChange={onTabChange}
              isCenter={false}
              //isActiveBg={true}
            />
            <TabsHeader
              isActiveText={true}
              title="Debits"
              value="tab3"
              activeTabId={activeTab}
              onTabChange={onTabChange}
              isCenter={false}
              //isActiveBg={true}
            />
          </TabsList>
          <TabsContent value="tab1" activeTabId={activeTab}>
            <div className="flex-1 mt-1">Transaction 1</div>
          </TabsContent>
          <TabsContent value="tab2" activeTabId={activeTab}>
            <div className="flex-1 mt-1">Transaction 2</div>
          </TabsContent>
          <TabsContent value="tab3" activeTabId={activeTab}>
            <div className="flex-1 mt-1">Transaction 3</div>
          </TabsContent>
        </TabsRoot>
      </div>
    </div>
  );
}

export default FlexibleTab;
