"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; 
import UserHeader from "@/components/user/UserHeader";
import AssigendTours from "./AssigendTours";
import CalenderView from "./CalenderView";

function AssignedToursPage() {
  const [activeTab, setActiveTab] = useState("calendar");
  return (
    <main className="grow">
      {/* Page Header */}
      <UserHeader
        title="Assigned Tours"
        subTitle="View your scheduled tours and manage guest information"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-8 sm:py-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>

          {/* Calendar View Tab */}
          <TabsContent value="calendar" className="mt-3 sm:mt-6">
            <CalenderView />
          </TabsContent>

          {/* List View Tab */}
          <TabsContent value="list" className="mt-3 sm:mt-6">
            <AssigendTours />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
export default AssignedToursPage;
