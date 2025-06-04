import React from "react";
import moment from "moment";

const TaskListTable = ({ tableData }) => {
  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-900 text-green-300 border border-green-700";
      case "Pending":
        return "bg-purple-900 text-purple-300 border border-purple-700";
      case "InProgress":
        return "bg-cyan-900 text-cyan-300 border border-cyan-700";
      default:
        return "bg-gray-800 text-gray-400 border border-gray-700";
    }
  };

  const getPriorityBadgeColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-900 text-red-300 border border-red-700";
      case "Medium":
        return "bg-orange-900 text-orange-300 border border-orange-700";
      case "Low":
        return "bg-green-900 text-green-300 border border-green-700";
      default:
        return "bg-gray-800 text-gray-400 border border-gray-700";
    }
  };

  return (
    <div className="overflow-x-hidden p-0 rounded-lg mt-3 bg-gray-900">
      <table className="min-w-[600px] sm:min-w-full w-full text-sm sm:table block">
        <thead className="hidden sm:table-header-group">
          <tr className="text-left border-b border-gray-700">
            <th className="py-3 px-4 text-gray-300 font-medium text-[13px]">
              Name
            </th>
            <th className="py-3 px-4 text-gray-300 font-medium text-[13px]">
              Status
            </th>
            <th className="py-3 px-4 text-gray-300 font-medium text-[13px]">
              Priority
            </th>
            <th className="py-3 px-4 text-gray-300 font-medium text-[13px] hidden md:table-cell">
              Created On
            </th>
          </tr>
        </thead>
        <tbody className="block sm:table-row-group">
          {tableData.map((task) => (
            <tr
              key={task._id}
              className="border-t border-gray-700 hover:bg-gray-800 sm:table-row flex flex-col sm:flex-row"
            >
              <td className="py-3 px-4 text-gray-200 text-[13px] sm:table-cell">
                <span className="font-semibold sm:hidden block text-gray-400">
                  Name:
                </span>
                <span className="line-clamp-1">{task.title}</span>
              </td>
              <td className="py-3 px-4 sm:table-cell space-y-1.5">
                <span className="font-semibold sm:hidden block text-gray-400">
                  Status:
                </span>
                <span
                  className={`px-2 py-1 text-xs rounded ${getStatusBadgeColor(
                    task.status
                  )}`}
                >
                  {task.status}
                </span>
              </td>
              <td className="py-3 px-4 sm:table-cell space-y-1.5">
                <span className="font-semibold sm:hidden block text-gray-400">
                  Priority:
                </span>
                <span
                  className={`px-2 py-1 text-xs rounded ${getPriorityBadgeColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
              </td>
              <td className="py-3 px-4 text-gray-400 text-[13px] hidden md:table-cell">
                {task.createdAt
                  ? moment(task.createdAt).format("Do MMM YYYY")
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskListTable;
