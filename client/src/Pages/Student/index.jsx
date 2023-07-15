import React from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { getStudentsQuery } from "../../queries/queries";
import "./Student.css";
import PageContainer from "../../Layouts/PageContainer";
import { PrimaryCard, EmptyCard, Loader } from "../../Components";

const Student = () => {
  const { data, loading, error } = useQuery(getStudentsQuery);

  if (loading) {
    return (
      <div className="w-full">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }
  return (
    <PageContainer className="flex">
      <div className="flex w-full flex-col gap-8 px-4 py-4 md:flex-row xl:px-0">
        <ul
          className={
            data.students.length == 0 ? `flex w-full` : `card-container w-full`
          }
        >
          {data.students.length !== 0 ? (
            data.students.map((currentStudent) => {
              return (
                <PrimaryCard
                  key={currentStudent.id}
                  {...currentStudent}
                  isStudent
                />
              );
            })
          ) : (
            <EmptyCard
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
