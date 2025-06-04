import React from 'react';

const UserCard = ({ userInfo }) => {
  return (
    <div className="user-card min-h-[140px] p-4 rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md dark:hover:shadow-gray-800 border border-gray-200 dark:border-gray-700 transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={userInfo?.profileImageUrl}
            alt="Avatar"
            className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-700 object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {userInfo?.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {userInfo?.email}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-end gap-3 mt-5">
        <StatCard label="Pending" count={userInfo?.pendingTasks || 0} status="Pending" />
        <StatCard label="Completed" count={userInfo?.completedTasks || 0} status="Completed" />
        <StatCard label="In Progress" count={userInfo?.inProgressTasks || 0} status="In Progress" />
      </div>
    </div>
  );
};

export default UserCard;

const StatCard = ({ label, count, status }) => {
  const getStatusTagColor = () => {
    switch (status) {
      case 'In Progress':
        return 'text-cyan-500 bg-gray-50 dark:bg-gray-800';
      case 'Completed':
        return 'text-indigo-500 bg-gray-50 dark:bg-gray-800';
      default:
        return 'text-violet-500 bg-gray-50 dark:bg-gray-800';
    }
  };

  return (
    <div className={`flex-1 text-[10px] font-medium px-4 py-1.5 rounded ${getStatusTagColor()}`}>
      <span className="text-[12px] font-semibold">{count}</span>
      <br />
      {label}
    </div>
  );
};
