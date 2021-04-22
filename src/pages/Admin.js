import React from "react";
import { useSelector } from "react-redux";
import QuestionForm from "../components/QuestionForm";
import { Redirect } from "react-router";
import { user } from "../redux/user/selectors";
import QuestionTable from "../components/QuestionTable";

const Admin = () => {
  const { isHost } = useSelector(user);
  if (!isHost) return <Redirect to="/login" />;
  return (
    <div className="container mx-auto">
      <div className="grid grid-rows-3 grid-flow-col grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-lg row-span-2">
          <QuestionForm />
        </div>
        <div className="p-4 col-span-2 row-span-3 bg-white rounded-lg shadow-lg">
          <QuestionTable />
        </div>
      </div>
    </div>
  );
};

export default Admin;
