import React, { useState } from "react";

import {
  InputTextLabel,
  InputTextVariant,
  ContainedActionBtn,
  OutlinedActionBtn,
} from "../../../Components";
import { addStudentMutation, getStudentsQuery } from "../../../queries/queries";
import { useMutation } from "@apollo/client";

const StudentForm = (props) => {
  const [addStudent] = useMutation(addStudentMutation);
  const { closeStudentForm } = props;

  // STUDENT INPUT DATA:
  const [studentData, setStudentData] = useState({
    studentName: props?.isEditStudent ? props.name : "",
    studentId: props?.isEditStudent ? props.rollNumber : "",
    studentEmail: props?.isEditStudent ? props.email : "",
    studentNumber: props?.isEditStudent ? props.phoneNo : "",
  });

  // HANDLE STUDENT DATA:
  const handleStudentData = (event) => {
    const { name, value } = event.target;
    setStudentData((prevStudentData) => {
      return { ...prevStudentData, [name]: value };
    });
  };

  // HANDLE ADD STUDENT:
  const handleAddStudentSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log(studentData);
    if (props.isEditStudent) {
      props.closeEdit();
    } else {
      addStudent({
        variables: studentData,
        refetchQueries: [{ query: getStudentsQuery }],
      });
      closeStudentForm();
    }
  };

  return (
    <form className="flex flex-col gap-7" onSubmit={handleAddStudentSubmit}>
      <div className="flex flex-col gap-3">
        <InputTextLabel labelText="Name">
          <InputTextVariant
            inputTextName="studentName"
            inputTextType="text"
            inputTextHandle={handleStudentData}
            inputTextValue={studentData.studentName}
          />
        </InputTextLabel>
        <InputTextLabel labelText="ID Number">
          <InputTextVariant
            inputTextName="studentId"
            inputTextType="text"
            inputTextHandle={handleStudentData}
            inputTextValue={studentData.studentId}
          />
        </InputTextLabel>
        <InputTextLabel labelText="Email">
          <InputTextVariant
            inputTextName="studentEmail"
            inputTextType="text"
            inputTextHandle={handleStudentData}
            inputTextValue={studentData.studentEmail}
          />
        </InputTextLabel>
        <InputTextLabel labelText="Phone Number">
          <InputTextVariant
            inputTextName="studentNumber"
            inputTextType="text"
            inputTextHandle={handleStudentData}
            inputTextValue={studentData.studentNumber}
          />
        </InputTextLabel>
      </div>
      <div className="flex gap-3">
        <ContainedActionBtn
          actionText={props.isEditStudent ? "EDIT" : "ADD"}
          className="basis-1/2"
          actionType="submit"
          actionHandler={(event) => {
            event.stopPropagation();
          }}
        />
        <OutlinedActionBtn
          actionText="CANCEL"
          className="basis-1/2"
          actionHandler={(event) => {
            event.stopPropagation();
            if (props.isEditStudent) {
              props.closeEdit();
            } else {
              closeStudentForm();
            }
          }}
          actionType="button"
        />
      </div>
    </form>
  );
};

export default StudentForm;
