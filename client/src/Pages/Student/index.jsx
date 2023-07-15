import React from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { getStudentsQuery } from "../../queries/queries";

const Student = () => {
  const { data, loading, error } = useQuery(getStudentsQuery);

  if (loading) {
    return <div>Loading students... </div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  console.log(data);

  return (
    <div>
      {data.students.map((student) => (
        <div key={student.id}>{student.name}</div>
      ))}
    </div>
  );
};

export default graphql(getStudentsQuery)(Student);
