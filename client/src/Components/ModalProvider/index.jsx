/* eslint-disable react/prop-types */
import React from "react";
import { Modal } from "@mui/material";
import { IconActionBtn } from "../Actions";
import CloseIcon from "@mui/icons-material/Close";

const ModalProvider = (props) => {
  const { children, modalBtnVariant, isOpen, closeModal, modalTitle } = props;
  return (
    <div onClick={(event) => event.stopPropagation()}>
      {modalBtnVariant}
      <Modal open={isOpen} onClose={closeModal}>
        <div className="absolute left-1/2 top-1/2 flex w-[400px] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded bg-200 p-4 text-800">
          <div className="flex items-center justify-between">
            <span className="font-medium">{modalTitle}</span>
            <IconActionBtn
              actionHandler={(event) => {
                event.stopPropagation();
                closeModal();
              }}
              actionText={<CloseIcon />}
            />
          </div>
          <div className="overflow-hidden rounded-md bg-50">{children}</div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalProvider;
