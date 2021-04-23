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
      <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
        <div className="row-span-1 p-4 mt-16 bg-white rounded-lg shadow-lg">
          <QuestionForm />
        </div>
        <div className="col-span-2 row-span-3 p-4 mt-16 bg-white rounded-lg shadow-lg">
          <QuestionTable />
        </div>
      </div>
    </div>
  );
};

export default Admin;
