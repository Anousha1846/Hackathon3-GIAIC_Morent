"use client";
import Link from "next/link";
import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
        <p className="text-gray-700 mb-6">
          Your rental has been confirmed. Thank you for choosing us!
        </p>
        <button
          onClick={onClose}
          className="bg-[#3563E9] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        > <Link href="/">Close</Link>
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;