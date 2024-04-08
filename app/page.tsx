`use client`

import SidebarComp from "./components/SidebarComp";
import Tabs from "./components/Tabs";
import { format } from 'date-fns';

const tabsData = [
  {
    title: 'Hot Dishes',
    content: <div>This is tab 1 content.</div>,
  },
  {
    title: 'Cold Dishes',
    content: <div>This is tab 2 content.</div>,
  },
  {
    title: 'Soup',
    content: <div>This is tab 3 content.</div>,
  },
  {
    title: 'Grill',
    content: <div>This is tab 3 content.</div>,
  },
  {
    title: 'Appetizer',
    content: <div>This is tab 3 content.</div>,
  },
  {
    title: 'Dessert',
    content: <div>This is tab 3 content.</div>,
  },
];

export default function Home() {
  const date = new Date(); // Assuming the date is 2nd February 2024
  const formattedDate = format(date, 'EEEE, d MMM yyyy'); // Format the date

  return (
    <div className="flex">
      <SidebarComp menu="home"/>
      <div className="w-[65rem] mx-16 mt-4">
        <div className="flex my-8">
          <div>
            <div className="font-bold text-xl">
              Made resto
            </div>
            <div>
              { formattedDate }
            </div>
          </div>
        </div>
        <Tabs tabs={tabsData} />
      </div>
      <div className="w-[25rem] bg-sideColor rounded-lg">
      </div>
    </div>
  );
}
