import React, { useState } from 'react';
import {
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from 'tw-elements-react';

const certificates = [
  {
    title: 'Ethical Hacking and Penetration Testing | EHPT+',
    date: 'August 2024',
    imageUrl: 'ethical hacking.jpg', // Placeholder image
  },
  {
    title: 'Python Certification',
    date: 'August 2023',
    imageUrl: 'https://via.placeholder.com/350x150', // Placeholder image
  },
  {
    title: 'Data Analytics Certification',
    date: 'December 2023',
    imageUrl: 'https://via.placeholder.com/350x150', // Placeholder image
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <section id="certificates" className="min-h-screen bg-black pb-0">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Certificates
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-0">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="relative group cursor-pointer border border-green-500 rounded-lg hover:shadow-green-500 hover:shadow-xl"
            onClick={() => openModal(cert)}
          >
            <img
              src={cert.imageUrl}
              alt={cert.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-lg font-semibold">{cert.title}</h2>
              <p className="text-gray-300">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Use `isModalOpen` to conditionally render the modal to control its presence in the DOM */}
      {isModalOpen && (
        <TEModal show={isModalOpen} setShow={setIsModalOpen}>
          <TEModalDialog className="max-w-lg mx-auto">
            <TEModalContent>
              <TEModalHeader>
                <h2 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                  {selectedCert?.title}
                </h2>
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </TEModalHeader>
              <TEModalBody>
                <div className="flex justify-center">
                  <img
                    src={selectedCert?.imageUrl}
                    alt={selectedCert?.title}
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
              </TEModalBody>
              <TEModalFooter>
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={closeModal}
                >
                  Close
                </button>
              </TEModalFooter>
            </TEModalContent>
          </TEModalDialog>
        </TEModal>
      )}
    </section>
  );
};

export default Certificates;
