import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import io from "socket.io-client";

const socket = io("http://localhost:4001");

const Chart = () => {
  const [count, setCount] = useState(null);
  const shiftSize = 7;
  function onMessage() {
    socket.on("answer_count", (count) => {
      setCount(count);
    });
    socket.on("new_question_for_user", (question) => {
      setCount(null);
    });
  }

  useEffect(onMessage, []);

  if (!count) return null;
  return (
    <PieChart
      animate
      data={[
        { title: "Yes", value: count?.yes, color: "#34D399" },
        { title: "No", value: count?.no, color: "#EF4444" },
      ]}
      label={({ dataEntry }) => dataEntry.value}
      radius={PieChart.defaultProps.radius - shiftSize}
      labelStyle={{ fill: "#ffffff" }}
    />
  );
};

export default Chart;
