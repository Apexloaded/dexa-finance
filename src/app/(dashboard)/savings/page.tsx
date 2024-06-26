"use client";

import QuickAction from "@/components/Home/quick-actions/QuickAction";
import AutoSaveTab from "@/components/Home/savings/Tabs/AutoSaveTab";
import FixedTab from "@/components/Home/savings/Tabs/FixedTab";
import FlexibleTab from "@/components/Home/savings/Tabs/FlexibleTab";
import TabsContent from "@/components/Tabs/TabsContent";
import TabsHeader from "@/components/Tabs/TabsHeader";
import TabsList from "@/components/Tabs/TabsList";
import TabsRoot from "@/components/Tabs/TabsRoot";
import Header from "@/components/ui/Header";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { routes } from "@/libs/routes";
import {
  TabType,
  selectSavingsTabs,
  setSavingsTabs,
} from "@/slices/savings/active-tab.slice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Saving() {
  const router = useRouter();
  const activeTab = useAppSelector(selectSavingsTabs);
  const dispatch = useAppDispatch();

  const onTabChange = (tabId: string) => {
    dispatch(setSavingsTabs(tabId as TabType));
  };

  return (
    <div className="grid grid-cols-6 h-full overflow-hidden">
      <div className="col-span-6 lg:col-span-4 h-full bg-white overflow-hidden">
        <div className="flex h-full flex-col overflow-scroll scrollbar-hide">
          <div className="flex items-center pr-5 py-4 pl-2 z-50 bg-white justify-between sticky top-0">
            <Header title="Savings" isBack={true} />
            <div>
              <p>H</p>
            </div>
          </div>
          <div>
            <TabsRoot>
              <TabsList className="sticky top-14 z-50 bg-white px-5 shadow-sm border-b border-light pb-1">
                <TabsHeader
                  className="text-left"
                  isActiveText={true}
                  title="Flexible"
                  value="tab1"
                  activeTabId={activeTab}
                  onTabChange={onTabChange}
                  isCenter={false}
                />
                <TabsHeader
                  isActiveText={true}
                  title="Auto Save"
                  value="tab2"
                  activeTabId={activeTab}
                  onTabChange={onTabChange}
                  isCenter={false}
                />
                <TabsHeader
                  isActiveText={true}
                  title="Fixed Savings"
                  value="tab3"
                  activeTabId={activeTab}
                  onTabChange={onTabChange}
                  isCenter={false}
                />
              </TabsList>
              <TabsContent value="tab1" activeTabId={activeTab}>
                <div className="flex mt-5">
                  <FlexibleTab />
                </div>
              </TabsContent>
              <TabsContent value="tab2" activeTabId={activeTab}>
                <div className="flex mt-5">
                  <AutoSaveTab />
                </div>
              </TabsContent>
              <TabsContent value="tab3" activeTabId={activeTab}>
                <div className="flex">
                  <FixedTab />
                </div>
              </TabsContent>
            </TabsRoot>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-2 bg-light">
        <QuickAction />
      </div>
    </div>
  );
}
