import React from "react";
import "./Student.css";
import PageContainer from "../../Layouts/PageContainer";
import { PrimaryCard } from "../../Components";

const Student = () => {
  const studentData = [
    { id: "1", studentName: "Vivek Bhatt", bgColor: "#8EC5FC" },
    { id: "2", studentName: "Niharika Kesarwani", bgColor: "#E0C3FC" },
    { id: "3", studentName: "Pranita Fulsundar", bgColor: "#80D0C7" },
    { id: "4", studentName: "Abhishek Gupta", bgColor: "#8EC5FC" },
    { id: "5", studentName: "Shraddha Vishwakarma", bgColor: "#8EC5FC" },
  ];
  return (
    <PageContainer className="flex">
      <div className="flex w-full flex-col gap-8 px-4 py-4 md:flex-row xl:px-0">
        <ul className="card-container w-full">
          {studentData.map((currentStudent) => {
            return <PrimaryCard key={currentStudent.id} {...currentStudent} />;
          })}
        </ul>
      </div>
    </PageContainer>
  );
};

export default Student;
