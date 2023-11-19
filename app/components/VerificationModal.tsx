import React from 'react'

interface VerificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    verificationType: 'email' | 'phone';
  }


const VerificationModal = ({ isOpen, onClose, verificationType }: VerificationModalProps) => {
    if (!isOpen) return null;
  

    const isEmailVerification = verificationType === 'email';
  const title = isEmailVerification ? 'Verify Your Email' : 'Verify Your Phone';
  const message = isEmailVerification 
    ? 'Thank you for registering! Please check your email for the verification link.'
    : 'Thank you for registering! A verification code has been sent to your phone.';


  return (
    <>
    {/* Overlay */}
    <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
    ></div>

    {/* Modal */}
    <dialog id="my_modal_1" className="modal" open={isOpen}>
        <div className="modal-box relative bg-secondary-content">
            <button
                className="btn btn-sm btn-circle absolute right-2 top-2"
                onClick={onClose}
            >
                ✕ {/* You can replace this with an icon like <FaTimes /> if you prefer */}
            </button>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="py-4">{message}</p>
            <div className="modal-action">
                <button
                    className="btn btn-primary"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    </dialog>
</>
  )
}

export default VerificationModal