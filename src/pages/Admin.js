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
      <div class="grid grid-cols-3 gap-4">
        <div class="p-4 bg-white rounded-lg shadow-lg">
          <QuestionForm />
        </div>
        <div class="p-4 col-span-2">
          <QuestionTable />
        </div>
      </div>
    </div>
  );
};

export default Admin;
