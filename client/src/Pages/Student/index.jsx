import React, { useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { getStudentsQuery } from "../../queries/queries";
import "./Student.css";
import PageContainer from "../../Layouts/PageContainer";
import { PrimaryCard, EmptyCard, Loader } from "../../Components";
import InputSearch from "../../Components/Inputs/InputSearch";

const Student = () => {
  const { data, loading, error } = useQuery(getStudentsQuery);
  const [inputText, setInputText] = useState("");

  const studentsData = useMemo(() => {
    if (inputText) {
      return data?.students.filter(
        (student) =>
          student.name.toLowerCase().includes(inputText.toLowerCase()) ||
          student.email.toLowerCase().includes(inputText.toLowerCase())
      );
    } else {
      return data?.students;
    }
  }, [data, inputText]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }
  return (
    <PageContainer className="m-4 flex flex-col items-center gap-4">
      <InputSearch searchName="Students" setInputText={setInputText} />
      <div className="flex w-full flex-col gap-8 px-4 py-4 md:flex-row xl:px-0">
        <ul
          className={
            data.students.length == 0
              ? `flex w-full`
              : `card-container w-full justify-items-center`
          }
        >
          {data.students.length !== 0 ? (
            studentsData.length ? (
              studentsData.map((currentStudent) => {
                return (
                  <PrimaryCard
                    key={currentStudent.id}
                    {...currentStudent}
                    isStudent
                  />
                );
              })
            ) : (
              <p className="text-xl">
                No Student with name/email of <strong>{inputText}</strong> found
              </p>
            )
          ) : (
            <EmptyCard
              addBtnText="Add Students"
              emptyCardTitle="studentEmpty"
              emptyCardDescription="No Student Data"
              emptyCardUrl="https://res.cloudinary.com/duqsyuriy/image/upload/v1689417730/NoStudent_xzizpm.svg"
            />
          )}
        </ul>
      </div>
    </PageContainer>
  );
};

export default graphql(getStudentsQuery)(Student);
