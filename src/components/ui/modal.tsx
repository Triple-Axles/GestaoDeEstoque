import React, { Children } from "react";

const BACKGROUND_STYLE: React.CSSProperties = {
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
};

const MODAL_STYLE: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "100px",
  borderColor: "#007bff",
  borderWidth: "2.5px",
  borderRadius: "10px",
  boxShadow: "(10px 10px, 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
};

const BUTTON_STYLE: React.CSSProperties = {
  position: "absolute",
  marginLeft: "25%",
  marginTop: "2%",
};

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  setModalOpen: () => void;
}

export default function Modal({ isOpen, setModalOpen, children }: ModalProps) {
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div>{children}</div>
          <div style={BUTTON_STYLE}>
            <button onClick={setModalOpen}>Fechar</button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
