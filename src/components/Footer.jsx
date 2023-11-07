import React from "react";
import "../input.css";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ background: "#000", height: "20vh" }}
      class="max-w-screen-xl px-4 py-1 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"
    >
      <nav class="flex flex-wrap justify-center -mx-5 -my-2">
        <div class="px-5 py-2">
          <p
            onClick={() => {
              navigate("campuzone-features");
            }}
            style={{ color: "#d9519f",cursor:"pointer" }}
          >
            Features
          </p>
        </div>
        <div class="px-5 py-2">
          <p
            onClick={() => {
              navigate("campuzone-plans");
            }}
            style={{ color: "#d9519f",cursor:"pointer" }}
          >
            Plans
          </p>
        </div>
        <div class="px-5 py-2">
          <p
            onClick={() => {
              navigate("campuzone-connect");
            }}
            style={{ color: "#d9519f",cursor:"pointer" }}
          >
            Connect
          </p>
        </div>
      </nav>
      <div class="flex justify-center mt-8 space-x-6">
        <a
          href="hhttps://twitter.com/campuzone3"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Twitter</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2341 10.1625L22.9764 0H20.9046L13.3138 8.82375L7.25081 0H0.257812L9.42619 13.3433L0.257812 24H2.32969L10.3461 14.6818L16.7488 24H23.7418L14.2335 10.1625H14.2341ZM11.3964 13.4606L10.4674 12.132L3.07613 1.55962H6.25838L12.2229 10.092L13.1518 11.4206L20.9055 22.5112H17.7236L11.3964 13.4612V13.4606Z"
              fill="#d9519f"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/campuzone/?hl=en"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Instagram</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
              fill="#d9519f"
            />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/adminatcampuzone/"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Facebook</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 12C4.00014 10.4605 4.44451 8.95364 5.27979 7.66038C6.11506 6.36712 7.30576 5.34234 8.70901 4.70901C10.1123 4.07568 11.6684 3.8607 13.1908 4.08987C14.7132 4.31904 16.1372 4.98262 17.2918 6.00099C18.4464 7.01936 19.2826 8.34926 19.7002 9.83111C20.1177 11.313 20.0988 12.8838 19.6457 14.3552C19.1926 15.8265 18.3246 17.1359 17.1458 18.1262C15.967 19.1165 14.5275 19.7456 13 19.938V14H15C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13C16 12.7348 15.8946 12.4804 15.7071 12.2929C15.5196 12.1054 15.2652 12 15 12H13V10C13 9.73478 13.1054 9.48043 13.2929 9.29289C13.4804 9.10536 13.7348 9 14 9H14.5C14.7652 9 15.0196 8.89464 15.2071 8.70711C15.3946 8.51957 15.5 8.26522 15.5 8C15.5 7.73478 15.3946 7.48043 15.2071 7.29289C15.0196 7.10536 14.7652 7 14.5 7H14C13.2044 7 12.4413 7.31607 11.8787 7.87868C11.3161 8.44129 11 9.20435 11 10V12H9C8.73478 12 8.48043 12.1054 8.29289 12.2929C8.10536 12.4804 8 12.7348 8 13C8 13.2652 8.10536 13.5196 8.29289 13.7071C8.48043 13.8946 8.73478 14 9 14H11V19.938C9.0667 19.6942 7.28882 18.7533 6 17.2917C4.71119 15.8302 4.00003 13.9486 4 12ZM12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
              fill="#d9519f"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/69466827/admin/"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">LinkedIn</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17V10M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z"
              stroke="#d9519f"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 17V13.75M11 13.75V10M11 13.75C11 10 17 10 17 13.75V17M7 7.01002L7.01 6.99902"
              stroke="#d9519f"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
      <p
        style={{ color: " #d9519f" }}
        class="mt-8 p-3 text-base leading-6 text-center text-gray-400"
      >
        © 2023 CAMPUZONE. All rights reserved.
      </p>
      <div className="blurbox"></div>
    </div>
  );
};
