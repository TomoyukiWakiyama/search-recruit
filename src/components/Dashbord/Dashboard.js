import React, { useEffect, useState } from "react";

import CreateCompany from "./Contents/CreateCompany";
import RecruitTable from "./Contents/RecruitTable/RecruitTable";

const Dashboard = () => {
  console.log("called Dashboard");
  const [recruits, setRecruits] = useState(
    JSON.parse(localStorage.getItem("recruits")) || []
  );
  useEffect(() => {
    localStorage.setItem("recruits", JSON.stringify(recruits));
  }, [recruits]);

  return (
    <>
      <CreateCompany recruits={recruits} setRecruits={setRecruits} />
      <RecruitTable recruits={recruits} setRecruits={setRecruits} />
    </>
  );
};

export default Dashboard;
