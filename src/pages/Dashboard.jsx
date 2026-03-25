import React from "react";
// import devhub from "../assets/devhub.pnh";

function Dashboard() {
  return (
    <div className="bg-gray-50 p-15 ">
      {/* <div className=" flex gap-4">
         <Link to="" className="text-4xl font-bold ">
          DevHub
        </Link>
        <img src={devhub} alt="Devhub icon" className="w-13 h-13" /> 
      </div> */}

      <div className="mb-10">
        <div className="bg-blue-700 border-2 rounded-2xl text-white p-8 text-left">
          <h1 className="text-3xl font-bold font-sans mb-3">
            Welcome back, John Doe!
          </h1>
          <p className=" ">Here's what's happening with your learning today</p>
        </div>

        <div>
          <img src="" alt="Graduation Badge" />
        </div>
      </div>

      <div className="flex gap-5 mb-10">
        <div className="border-2 w-full max-w-100 bg-white rounded-2xl">
          <div className="p-5 text-left ">
            <p className="text-gray-500 text-sm">Courses in Progress</p>
            <h1 className="text-3xl font-bold">3</h1>
          </div>

          <div>
            <img src="" alt="Opened Book" />
          </div>
        </div>

        <div className="border-2 w-full max-w-100 bg-white rounded-2xl">
          <div className="p-5 text-left ">
            <p className="text-gray-500 text-sm">Hours Learned</p>
            <h1 className="text-3xl font-bold">48</h1>
          </div>

          <div>
            <img src="" alt="Clock" />
          </div>
        </div>

        <div className="border-2 w-full max-w-100 bg-white rounded-2xl">
          <div className="p-5 text-left ">
            <p className="text-gray-500 text-sm ">Certificate Earned</p>
            <h1 className="text-3xl font-bold">5</h1>
          </div>

          <div>
            <img src="" alt="Certificate Badge" />
          </div>
        </div>

        <div className=" border-2 w-full max-w-100 bg-white rounded-2xl">
          <div className="p-5 text-left ">
            <p className="text-gray-500 text-sm">Current Streak</p>
            <h1 className="text-3xl font-bold">12 days</h1>
          </div>

          <div>
            <img src="" alt="Rate Flow" />
          </div>
        </div>
      </div>

      <div className="bg-sky-50 mb-10 p-10 rounded-2xl border-2">
        <div className="flex justify-between mb-10 ">
          <div>
            <div>
              <img src="" alt="finger print" />
            </div>
            <div>
              <h3>Learning Goals</h3>
              <p className="text-gray-500">Track your monthly objectives</p>
            </div>
          </div>

          <div>
            <p className="text-blue-500 flex ">View All</p>
          </div>
        </div>

        <div className="flex gap-4 ">
          <div className="border-2 rounded-2xl bg-white p-4">
            <h2 className="font-medium">Complete React Advanced Course</h2>

            <div className="flex justify-around">
              <p className="text-gray-500">65%</p>
              <p className="text-blue-500">65%</p>
            </div>
          </div>

          <div className="border-2 rounded-2xl bg-white p-4">
            <h2 className="font-medium">Earn 3 Certificate</h2>

            <div className="flex justify-around">
              <p className="text-gray-500">2 of 3</p>
              <p className="text-blue-500">67%</p>
            </div>
          </div>

          <div className="border-2 rounded-2xl bg-white p-4">
            <h2 className="font-medium">Study 50 Hours This Month</h2>

            <div className="flex justify-around">
              <p className="text-gray-500">40 of 50</p>
              <p className="text-blue-500">80%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 border-2 rounded-2xl p-5">
        <div className="border-2 rounded-2xl bg-white p-5">
          <div className="flex mb-9">
            <div>
              <img src="" alt="Rate flow" />
            </div>

            <div>
              <h3 className="font-bold">Recent Activity</h3>
              <p className="text-gray-500 text-lg">
                Your latest learning achievements
              </p>
            </div>
          </div>

          <div className="flex mb-5">
            <div>
              <img src="" alt="Certificate" />
            </div>

            <div>
              <h3 className="font-medium">Completed "React Hooks Deep Dive</h3>
              <p className="text-gray-500 text-sm">2 hours ago</p>
            </div>
          </div>

          <div className="flex mb-5">
            <div>
              <img src="" alt="Opened Book" />
            </div>

            <div>
              <h3 className="font-medium">
                Started "Advanced TypeScript Patterns"
              </h3>
              <p className="text-gray-500 text-sm">5 hours ago</p>
            </div>
          </div>

          <div className="flex mb-5">
            <div>
              <img src="" alt="Star Badge" />
            </div>

            <div>
              <h3 className="font-medium">Earned "7-Day Streak" badge</h3>
              <p className="text-gray-500 text-sm">1 day ago</p>
            </div>
          </div>

          <div className="flex mb-15">
            <div>
              <img src="" alt="Notification icon" />
            </div>

            <div>
              <h4 className="font-medium">
                Joined "Web Development" discussion
              </h4>
              <p className="text-gray-500 text-sm">2 days ago</p>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-2xl bg-white p-5">
          <div className="flex mb-9">
            <div>
              <img src="" alt="Calendar bar" />
            </div>

            <div>
              <h2 className="font-bold">Upcoming Events</h2>
              <p className="text-gray-500">Don't miss these live sessions</p>
            </div>
          </div>

          <div className="flex border-2 rounded-2xl">
            <div>
              <img src="" alt="Calender" />
            </div>

            <div>
              <h3 className="font-bold">Live Q&A: React Performance</h3>
              <p className="text-gray-500">Today, 3:00 PM</p>
              <p className="text-gray-500 text-sm">with Sarah Johnson</p>
            </div>
          </div>

          <div className="flex border-2 rounded-2xl">
            <div>
              <img src="" alt="Calender" />
            </div>

            <div>
              <h3 className="font-bold">Workshop: Design System</h3>
              <p className="text-gray-500">Tomorrow, 10:00 AM</p>
              <p className="text-gray-500 text-sm">with Mike Chen</p>
            </div>
          </div>

          <div className="flex border-2 rounded-2xl">
            <div>
              <img src="" alt="Calender" />
            </div>

            <div>
              <h3 className="font-bold">Webinar: Career Tech</h3>
              <p className="text-gray-500">April 1, 2:00 PM</p>
              <p className="text-gray-500 text-sm">with Emma Williams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
