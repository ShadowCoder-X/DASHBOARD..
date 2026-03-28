import React from "react";
// import devhub from "../assets/devhub.png";
import hand from "../assets/hand.png";
import graduation from "../assets/graduation.png";
import book from "../assets/book.png";
import clock from "../assets/clock.png";
import stamp from "../assets/stamp.png";
import chart from "../assets/chart.png";
import chart2 from "../assets/chart2.png";
import certificate from "../assets/certificate.png";
import scan from "../assets/scan.png";
import star from "../assets/star.png";
import message from "../assets/message.png";
import calendar from "../assets/calendar.png";

function Dashboard() {
  return (
    <div>
      <div className="p-5 text-center sticky top-0 bg-white ">
        <p className="text-gray-600 font-sans font-medium bg-purple-50 border-2 border-gray-100 rounded-2xl p-3">
          Search courses, lessons, or topics..
        </p>
      </div>
      <div className="bg-gray-50 p-15 ">
        {/* <div className=" flex gap-4">
         <Link to="" className="text-4xl font-bold ">
          DevHub
        </Link>
        <img src={devhub} alt="Devhub icon" className="w-13 h-13" /> 
      </div> */}

        <div className="mb-10 bg-blue-700 border-none rounded-2xl flex justify-between">
          <div className="flex">
            <div className="text-white p-8 text-left ">
              <h1 className="text-3xl font-bold font-sans mb-3">
                Welcome back, John Doe!
              </h1>
              <p className="font-light">
                Here's what's happening with your learning today
              </p>
            </div>

            <div>
              <img src={hand} alt="Waving hand" className="w-12 h-12 mt-8" />
            </div>
          </div>

          <div>
            <img src={graduation} alt="Graduation Badge" />
          </div>
        </div>

        <div className="flex gap-5 mb-10">
          <div className="border-2 border-gray-100 w-full max-w-125 bg-white rounded-2xl flex justify-between p-5">
            <div className=" text-left ">
              <p className="text-gray-500 text-sm">Courses in Progress</p>
              <h1 className="text-3xl font-bold">3</h1>
            </div>

            <div className="bg-sky-50 border-none rounded-2xl">
              <img src={book} alt="Opened Book" className="w-13 h-12 " />
            </div>
          </div>

          <div className="border-2  border-gray-100 w-full max-w-125 bg-white rounded-2xl flex justify-between p-5">
            <div className=" text-left ">
              <p className="text-gray-500 text-sm">Hours Learned</p>
              <h1 className="text-3xl font-bold">48</h1>
            </div>

            <div className="bg-green-100 border-none rounded-2xl">
              <img src={clock} alt="Clock" className="w-9 h-9" />
            </div>
          </div>

          <div className="border-2  border-gray-100 w-full max-w-125 bg-white rounded-2xl flex justify-between p-5 ">
            <div className="text-left ">
              <p className="text-gray-500 text-sm ">Certificate Earned</p>
              <h1 className="text-3xl font-bold">5</h1>
            </div>

            <div className="bg-sky-50 border-none rounded-2xl">
              <img
                src={certificate}
                alt="Certificate Badge"
                className="w-9 h-9"
              />
            </div>
          </div>

          <div className=" border-2  border-gray-100 w-full max-w-125 bg-white rounded-2xl flex justify-between p-5 ">
            <div className="text-left ">
              <p className="text-gray-500 text-sm">Current Streak</p>
              <h1 className="text-3xl font-bold">12 days</h1>
            </div>

            <div className="bg-red-50 border-none rounded-2xl">
              <img src={chart2} alt="Chart Arrow up" className="w-9 h-9 p-1" />
            </div>
          </div>
        </div>

        <div className="bg-zinc-50 mb-10 p-10 rounded-2xl border-2  border-gray-100">
          <div className="flex justify-between mb-10 ">
            <div>
              <div>
                <img src={scan} alt="Scan" className="w-12 h-12" />
              </div>
              <div>
                <h3 className="font-medium">Learning Goals</h3>
                <p className="text-gray-500">Track your monthly objectives</p>
              </div>
            </div>

            <div>
              <p className="text-blue-500 flex ">View All</p>
            </div>
          </div>

          <div className="flex gap-4 ">
            <div className="border-2  border-gray-100 rounded-2xl bg-white p-4 w-full max-w-100">
              <h2 className="font-medium">Complete React Advanced Course</h2>

              <div className="flex justify-around">
                <p className="text-gray-500">65%</p>
                <p className="text-blue-500">65%</p>
              </div>
            </div>

            <div className="border-2  border-gray-100 rounded-2xl bg-white p-4 w-full max-w-100">
              <h2 className="font-medium">Earn 3 Certificate</h2>

              <div className="flex justify-around">
                <p className="text-gray-500">2 of 3</p>
                <p className="text-blue-500">67%</p>
              </div>
            </div>

            <div className="border-2  border-gray-100 rounded-2xl bg-white p-4 w-full max-w-100">
              <h2 className="font-medium">Study 50 Hours This Month</h2>

              <div className="flex justify-around">
                <p className="text-gray-500">40 of 50</p>
                <p className="text-blue-500">80%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 ">
          <div className="border-2 border-gray-100 rounded-2xl bg-white p-5 w-full">
            <div className="flex mb-9 gap-3">
              <div>
                <img src={chart} alt="Rate flow" className="w-7 h-7" />
              </div>

              <div>
                <h3 className="font-bold">Recent Activity</h3>
                <p className="text-gray-500 text-lg">
                  Your latest learning achievements
                </p>
              </div>
            </div>

            <div className="flex p-4 gap-3 mb-3 ">
              <div>
                <img src={stamp} alt="Certificate" className="w-14 h-12" />
              </div>

              <div>
                <h3 className="font-medium">
                  Completed "React Hooks Deep Dive
                </h3>
                <p className="text-gray-500 text-sm">2 hours ago</p>
              </div>
            </div>

            <div className="flex  p-4 gap-3 mb-3">
              <div>
                <img
                  src={book}
                  alt="Opened npm run devBook"
                  className="w-14 h-12"
                />
              </div>

              <div>
                <h3 className="font-medium">
                  Started "Advanced TypeScript Patterns"
                </h3>
                <p className="text-gray-500 text-sm">5 hours ago</p>
              </div>
            </div>

            <div className="flex p-4 gap-3 mb-3">
              <div>
                <img src={star} alt="Star Badge" className="w-7 h-7" />
              </div>

              <div>
                <h3 className="font-medium">Earned "7-Day Streak" badge</h3>
                <p className="text-gray-500 text-sm">1 day ago</p>
              </div>
            </div>

            <div className="flex p-4 gap-3 mb-3">
              <div>
                <img
                  src={message}
                  alt="Notification icon"
                  className="w-7 h-7"
                />
              </div>

              <div>
                <h4 className="font-medium">
                  Joined "Web Development" discussion
                </h4>
                <p className="text-gray-500 text-sm">2 days ago</p>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-100 rounded-2xl bg-white p-5 w-full ">
            <div className="flex mb-9 gap-3 ">
              <div>
                <img src={calendar} alt="Calendar bar" className="w-7 h-7" />
              </div>

              <div>
                <h2 className="font-bold">Upcoming Events</h2>
                <p className="text-gray-500">Don't miss these live sessions</p>
              </div>
            </div>

            <div className="flex border-2 border-blue-100 rounded-2xl p-4 gap-3 mb-3 hover:border-blue-400 hover:bg-blue-50">
              <div>
                <img src={calendar} alt="Calender" className="w-12 h-12" />
              </div>

              <div>
                <h3 className="font-bold">Live Q&A: React Performance</h3>
                <p className="text-gray-500">Today, 3:00 PM</p>
                <p className="text-gray-500 text-sm">with Sarah Johnson</p>
              </div>
            </div>

            <div className="flex border-2  border-blue-100  rounded-2xl p-4 gap-3 mb-3 hover:border-blue-400 hover:bg-blue-50">
              <div>
                <img src={calendar} alt="Calender" className="w-12 h-12" />
              </div>

              <div>
                <h3 className="font-bold">Workshop: Design System</h3>
                <p className="text-gray-500">Tomorrow, 10:00 AM</p>
                <p className="text-gray-500 text-sm">with Mike Chen</p>
              </div>
            </div>

            <div className="flex border-2 border-blue-100  rounded-2xl p-4 gap-3 hover:border-blue-400 hover:bg-blue-50 ">
              <div>
                <img
                  src={calendar}
                  alt="Calender"
                  className="w-12 h-12 text-white bg-blue-500"
                />
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
    </div>
  );
}

export default Dashboard;
