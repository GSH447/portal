"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/utils/axios";
import { AxiosErrorWithMessage } from "@/types/api";
import Link from "next/link";

export default function HiringForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    desiredRole: "",
    message: "",
    proofLinks: ""
  });
  const [file, setFile] = useState<File | null>(null);
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
    // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (e) => {
  //   setSelectedFile(e.target.files[0]);
  // };

  const getFileIcon = (fileName) => {
    if (!fileName) return "📁";
    const ext = fileName.split('.').pop().toLowerCase();
    if (["jpg", "jpeg", "png"].includes(ext)) return "🖼️";
    if (["pdf"].includes(ext)) return "📄";
    if (["doc", "docx"].includes(ext)) return "📝";
    if (["txt"].includes(ext)) return "📃";
    return "📁";
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    const role = currentPath.split("/").pop()?.replace("-", " ");
    if (role) setFormData((prev) => ({ ...prev, desiredRole: role }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setFile(e.target.files[0]);
  //   }
  // };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);

    const payload = new FormData();
    for (const key in formData) {
      payload.append(key, formData[key]);
    }
    if (file) payload.append("file", file);

    try {
      const response = await axiosInstance.post("/hiring", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const result = response.data;
      if (result.status === "success") {
        setSuccessMessage(`Application Submitted successfully - Please check your email ${result.email || "address"} for further instructions. Thank you for your interest`);
      } else {
        setErrorMessage(result.message || "Message not sent, try again or email jobs@glesyde.solutions");
      }
    } catch (err) {
      const error = err as AxiosErrorWithMessage;
      if (error.response && error.response.data) {
        setErrorMessage(
          error.response.data.message ||
            "Something went wrong. If issue persists, contact jobs@glesyde.solutions"
        );
      } else {
        setErrorMessage(
          error.message ||
            "Network error. If issue persists, contact jobs@glesyde.solutions or glesydesolutions@gmail.com"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col space-y-2 w-full max-w-lg mx-auto"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className="flex gap-2 justify-between">
        <input
          type="text"
          placeholder="First name"
          className="p-2 border rounded-md focus:ring focus:outline-none w-full dark:text-white text-black"
          name="firstName"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last name"
          className="p-2 border rounded-md focus:ring focus:outline-none w-full dark:text-white text-black"
          name="lastName"
          onChange={handleChange}
          required
        />
      </div>

      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-2 border rounded-md focus:ring focus:outline-none dark:text-white text-black"
        name="email"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        placeholder="Desired Role"
        className="w-full p-2 border rounded-md focus:ring focus:outline-none dark:text-white text-black"
        name="desiredRole"
        value={formData.desiredRole}
        onChange={handleChange}
        readOnly
      />

      <textarea
        placeholder="Type your motivational message here..."
        className="w-full p-2 border rounded-md focus:ring focus:outline-none h-35 resize-none dark:text-white text-black"
        name="message"
        onChange={handleChange}
        required
      />

      <input
        type="url"
        placeholder="Optional: Link to portfolio or proof of work"
        className="w-full p-2 border rounded-md focus:ring focus:outline-none dark:text-white text-black"
        name="proofLinks"
        onChange={handleChange}
      />

      {/* <input
        type="file"
        accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.txt"
        onChange={handleFileChange}
        className="w-full p-2 border rounded-md dark:text-white text-black"
        required
      /> */}

      {/* <div className="w-full">
        <label
          htmlFor="file-upload"
          className="flex items-center justify-center px-4 py-2 border border-dashed border-gray-400 rounded-md cursor-pointer bg-white dark:bg-gray-800 hover:border-blue-500 transition-all"
        >
          <span className="text-gray-700 dark:text-white" title="Upload Required Document- your CV or Resume, Or Required Task">📎 Upload Required Document</span>
        </label>

        <input
          id="file-upload"
          type="file"
          accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.txt"
          onChange={handleFileChange}
          className="hidden"
          required
        />
      </div> */}

    <div className="w-full max-w-md mx-auto mt-4">
      <label
        htmlFor="file-upload"
        className="flex items-center justify-center px-5 py-3 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-white dark:bg-gray-800 hover:border-blue-500 transition duration-300"
      >
        <span className="text-gray-800 dark:text-white text-sm">
          📎 Click to upload a file
        </span>
      </label>

      <input
        id="file-upload"
        type="file"
        accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.txt"
        onChange={handleFileChange}
        className="hidden"
        required
      />

      {selectedFile && (
        <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm flex items-center space-x-2">
          <span className="text-xl">{getFileIcon(selectedFile.name)}</span>
          <p className="text-sm text-gray-800 dark:text-gray-200">
            {selectedFile.name}
          </p>
        </div>
      )}
    </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="privacy"
          className="rounded"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor="privacy" className="text-white">
          Read
          <Link
            className="text-[#f4710f] dark:text-white font-bold cursor-pointer ml-1"
            href="/about"
            target="_blank"
          >
            about us
          </Link>
          , accept
          <Link
            className="text-[#f4710f] dark:text-white font-bold cursor-pointer mx-1"
            href="/privacy-policy"
            target="_blank"
          >
            policy
          </Link>
          &
          <Link
            className="text-[#f4710f] dark:text-white font-bold cursor-pointer ml-1"
            href="/terms"
            target="_blank"
          >
            t&amp;c
          </Link>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-[#161670] text-white p-2 rounded-md hover:bg-[#f4710f] cursor-pointer"
        disabled={!isChecked}
      >
        {loading ? "Processing Application..." : "Apply"}
      </button>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-[#f4710f]">{successMessage}</p>}
    </form>
  );
}
