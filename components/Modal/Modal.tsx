import React, { ReactNode, useEffect } from "react";
import Button from "../Button/Button";
import { CloseIcon } from "../svgs/CloseIcon";
import { LockIcon } from "../svgs/LockIcon";
import styles from "./Modal.module.scss";

interface IModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal = ({ children, open, onClose }: IModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return open ? (
    <div className={styles["modal"]}>
      <div className={styles["modal-overlay"]} />
      <div className={styles["modal-content"]}>
        <div className={styles["close-modal"]}>
          <Button
            variant="transparent"
            size="medium"
            onClick={onClose}
            icon={<CloseIcon />}
          ></Button>
        </div>
        <div className={styles["close-modal-mobile"]} onClick={onClose} />
        {children}
        <div className={styles["modal-footer"]}>
          <div className={styles["footer-text"]}>
            <LockIcon />
            <span>apeblendr.xyz</span>
          </div>
          <div className={styles["footer-line"]} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
