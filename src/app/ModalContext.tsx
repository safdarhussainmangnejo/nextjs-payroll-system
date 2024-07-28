// src/app/ModalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'mentorEvaluation' | 'inputTutorEvaluation' | 'addStudentAccount' | 'addTutor' |'addMetor'| 'addFee' | 'addDatabaseTutorMentor' | null;
interface ModalContextType {
  // isModalOpen: boolean;
  // openModal: () => void;
  // closeModal: () => void;
  showModal: (modalType: ModalType) => void;
  closeModal: () => void;
  currentModal: ModalType;
  
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);
  const [currentModal, setCurrentModal] = useState<ModalType>(null);
  // const [data, setData] = useState<ModalContextType>({});

  const showModal = (modalType: ModalType) => {
    setCurrentModal(modalType);
  };

  const closeModal = () => {
    setCurrentModal(null);
  };


  return (
    // <ModalContext.Provider value={{ isModalOpen, openModal, closeModal}}>
    <ModalContext.Provider value={{ closeModal, currentModal, showModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
