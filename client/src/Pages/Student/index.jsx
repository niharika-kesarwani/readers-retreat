import React from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { getStudentsQuery } from "../../queries/queries";

import "./Student.css";
import PageContainer from "../../Layouts/PageContainer";
import { PrimaryCard } from "../../Components";

const Student = () => {
  const { data, loading, error } = useQuery(getStudentsQuery);

  if (loading) {
    return <div>Loading students... </div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }
  return (
    <PageContainer className="flex">
      <div className="flex w-full flex-col gap-8 px-4 py-4 md:flex-row xl:px-0">
        <ul className="card-container w-full">
          {data.students.map((currentStudent) => {
            return (
              <PrimaryCard
                key={currentStudent.id}
                {...currentStudent}
                isStudent
              />
            );
          })}
        </ul>
      </div>
    </PageContainer>
  );
};

export default graphql(getStudentsQuery)(Student);
