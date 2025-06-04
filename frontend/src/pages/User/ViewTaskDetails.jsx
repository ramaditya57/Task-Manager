import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import moment from 'moment';
import AvatarGroup from '../../components/AvatarGroup';
import { LuSquareArrowOutUpRight } from 'react-icons/lu';

const ViewTaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  const getStatusTagColor = (status) => {
    switch (status) {
      case "In Progress":
        return "text-cyan-500 bg-cyan-100 dark:bg-cyan-900/20 border border-cyan-500/10";
      case "Completed":
        return "text-lime-500 bg-lime-100 dark:bg-lime-900/20 border border-lime-500/20";
      default:
        return "text-violet-500 bg-violet-100 dark:bg-violet-900/20 border border-violet-500/10";
    }
  };

  const getTaskDetailsById = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.TASKS.GET_TASK_BY_ID(id));
      if (response.data) {
        setTask(response.data.task);
      }
    } catch (error) {
      console.error("Error fetching task: ", error);
    }
  };

  const updateTodoChecklist = async (index) => {
    const todoChecklist = [...task?.todoChecklist];
    const taskId = id;

    if (todoChecklist && todoChecklist[index]) {
      todoChecklist[index].completed = !todoChecklist[index].completed;

      try {
        const response = await axiosInstance.put(
          API_PATHS.TASKS.UPDATE_TODO_CHECKLIST(taskId),
          { todoChecklist }
        );
        if (response.status === 200) {
          setTask(response.data?.task || task);
        } else {
          todoChecklist[index].completed = !todoChecklist[index].completed;
        }
      } catch {
        todoChecklist[index].completed = !todoChecklist[index].completed;
      }
    }
  };

  const handleLinkClick = (link) => {
    if (!/^https?:\/\//i.test(link)) {
      link = "https://" + link;
    }
    window.open(link, "_blank");
  };

  useEffect(() => {
    if (id) getTaskDetailsById();
  }, [id]);

  return (
    <DashboardLayout activeMenu="My Tasks">
      <div className="mt-5">
        {task && (
          <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
            <div className="form-card col-span-3 bg-white dark:bg-slate-900 p-5 rounded-xl shadow">
              <div className="flex items-center justify-between">
                <h2 className="text-base md:text-xl font-semibold text-slate-900 dark:text-white">
                  {task?.title}
                </h2>
                <div className={`text-xs md:text-sm font-medium px-4 py-1 rounded ${getStatusTagColor(task?.status)}`}>
                  {task?.status}
                </div>
              </div>

              <div className="mt-4">
                <InfoBox label="Description" value={task?.description} />
              </div>

              <div className="grid grid-cols-12 gap-4 mt-4">
                <div className="col-span-6 md:col-span-4">
                  <InfoBox label="Priority" value={task?.priority} />
                </div>
                <div className="col-span-6 md:col-span-4">
                  <InfoBox
                    label="Due Date"
                    value={task?.dueDate ? moment(task?.dueDate).format("Do MMM YYYY") : "N/A"}
                  />
                </div>
                <div className="col-span-6 md:col-span-4">
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Assigned To
                  </label>
                  <AvatarGroup
                    avatars={task?.assignedTo?.map((item) => item?.profileImageUrl) || []}
                    maxVisible={5}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Todo Checklist
                </label>
                {task?.todoChecklist?.map((item, index) => (
                  <TodoChecklist
                    key={`todo_${index}`}
                    text={item.text}
                    isChecked={item?.completed}
                    onChange={() => updateTodoChecklist(index)}
                  />
                ))}
              </div>

              {task?.attachments?.length > 0 && (
                <div className="mt-4">
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Attachments
                  </label>
                  {task?.attachments?.map((link, index) => (
                    <Attachment
                      key={`link_${index}`}
                      link={link}
                      index={index}
                      onClick={() => handleLinkClick(link)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ViewTaskDetails;

// Subcomponents

const InfoBox = ({ label, value }) => (
  <>
    <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
      {label}
    </label>
    <p className="text-sm font-medium text-slate-700 dark:text-slate-200 mt-0.5">
      {value}
    </p>
  </>
);

const TodoChecklist = ({ text, isChecked, onChange }) => (
  <div className="flex items-center gap-3 p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition">
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
      className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-sm cursor-pointer dark:bg-slate-800 dark:border-slate-600"
    />
    <p className="text-sm text-slate-800 dark:text-slate-200">{text}</p>
  </div>
);

const Attachment = ({ link, index, onClick }) => (
  <div
    className="flex justify-between items-center bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 px-3 py-2 rounded-md mb-3 mt-2 cursor-pointer"
    onClick={onClick}
  >
    <div className="flex-1 flex items-center gap-2 overflow-hidden">
      <span className="text-xs text-slate-400 font-semibold">
        {index < 9 ? `0${index + 1}` : index + 1}
      </span>
      <p className="text-xs text-slate-900 dark:text-slate-200 truncate">{link}</p>
    </div>
    <LuSquareArrowOutUpRight className="text-slate-400 dark:text-slate-500 text-sm" />
  </div>
);
