import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      setDashboardData(dashboard_data);
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      <div className="flex flex-wrap gap-4 ">

        {/* card 1 */}
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_1} alt="" />

          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboard_data.blogs}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>

               {/* card 2 */}
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_2} alt="" />

          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboard_data.comments}
            </p>
            <p className="text-gray-400 font-light">Comments</p>
          </div>
        </div>

                 {/* card 3 */}
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_3} alt="" />

          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboard_data.drafts}
            </p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>

{/* clsoing div of cards */}
      </div>


      <div>
        
</div>



    </div>
  );
}

export default Dashboard;
