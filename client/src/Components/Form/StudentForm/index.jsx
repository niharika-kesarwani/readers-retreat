import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  InputTextLabel,
  InputTextVariant,
  ContainedActionBtn,
  OutlinedActionBtn,
} from "../../../Components";
import {
  addStudentMutation,
  getStudentsQuery,
  updateStudentMutation,
} from "../../../queries/queries";
import { useMutation } from "@apollo/client";

const StudentForm = (props) => {
  const [addStudent] = useMutation(addStudentMutation);
  const [updateStudent] = useMutation(updateStudentMutation);
  const { closeStudentForm } = props;

  // STUDENT INPUT DATA:
  const [studentData, setStudentData] = useState({
    studentName: props?.isEditStudent ? props.name : "",
    studentId: props?.isEditStudent ? props.rollNumber : "",
    studentEmail: props?.isEditStudent ? props.email : "",
    studentNumber: props?.isEditStudent ? props.phoneNo : "",
  });

  // console.log("here", { id: props.id, ...studentData });
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
      updateStudent({
        variables: {
          updateStudentId: props.id,
          updateStudentRollNo: studentData.studentId,
          updateStudentName: studentData.studentName,
          updateStudentEmail: studentData.studentEmail,
          updateStudentPhoneNo: studentData.studentNumber,
        },
        refetchQueries: [{ query: getStudentsQuery }],
      });
      toast.success(`Updated ${studentData.studentName} successfully!`);
      props.closeEdit();
    } else {
      addStudent({
        variables: studentData,
        refetchQueries: [{ query: getStudentsQuery }],
      });
      toast.success(`Added ${studentData.studentName} successfully!`);
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
            inputTextType="number"
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
          actionText={props.isEditStudent ? "EDIT STUDENT" : "ADD STUDENT"}
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
