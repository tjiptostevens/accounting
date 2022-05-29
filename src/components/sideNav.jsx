import React, { useState } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import useWindow from "./useWindow";
import "./assets/css/sideNav.css";

const SideNav = (props) => {
  const { width } = useWindow();
  const [data, setData] = useState({
    width: true,
    micon: "m_icon bi bi-x-circle",
  });
  const handleLogout = (e) => {
    sessionStorage.clear();
    localStorage.clear();
  };

  return (
    <>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <symbol id="bootstrap" viewBox="0 0 118 94">
            <title>Bootstrap</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
            ></path>
          </symbol>
          <symbol id="qr" viewBox="0 0 512 512">
            <path
              d="M503.096,189.791c-17.755-66.262-60.031-121.518-119.041-155.588C345.389,11.879,301.35,0.08,256.7,0.08
				c-91.706,0-176.962,48.994-222.499,127.865C0.133,186.954-8.852,255.946,8.904,322.208
				c17.755,66.265,60.033,121.519,119.041,155.587c8.209,4.74,16.663,9.001,25.313,12.78h-3.97c-5.894,0-10.671,4.779-10.671,10.671
				s4.778,10.671,10.671,10.671l105.883,0.001c0.042,0,0.084,0.001,0.127,0.001c0.042,0,0.083-0.001,0.125-0.001l107.288,0.001
				c5.893,0,10.671-4.779,10.671-10.671s-4.778-10.671-10.671-10.671h-4.758c49.666-21.555,92.118-58.5,119.844-106.521
				C511.867,325.046,520.852,256.055,503.096,189.791z M459.315,373.384c-41.715,72.25-119.832,117.148-203.891,117.192h-0.252
				c-40.865-0.021-81.165-10.831-116.555-31.264c-54.073-31.218-92.817-81.87-109.096-142.626
				c-16.281-60.758-8.054-123.996,23.165-178.069C94.421,66.329,172.596,21.424,256.702,21.424
				c40.909,0,81.257,10.811,116.683,31.264C485.491,117.412,524.039,261.277,459.315,373.384z"
            />
            <path
              d="M117.274,245.328h117.381c5.893,0,10.671-4.778,10.671-10.671V117.275c0-5.893-4.779-10.671-10.671-10.671H117.274
				c-5.893,0-10.671,4.779-10.671,10.671v117.381C106.603,240.55,111.382,245.328,117.274,245.328z M127.946,127.947h96.039v96.039
				h-96.039V127.947z"
            />
            <path
              d="M191.973,149.287h-32.014c-5.894,0-10.671,4.778-10.671,10.671v32.013c0,5.894,4.778,10.671,10.671,10.671h32.014
				c5.893,0,10.671-4.778,10.671-10.671v-32.013C202.644,154.066,197.866,149.287,191.973,149.287z M181.301,181.3H170.63v-10.67
				h10.671V181.3z"
            />
            <path
              d="M320.026,202.643h32.015c5.893,0,10.671-4.778,10.671-10.671v-32.013c0-5.894-4.779-10.671-10.671-10.671h-32.015
				c-5.893,0-10.671,4.778-10.671,10.671v32.013C309.355,197.865,314.133,202.643,320.026,202.643z M330.698,170.63h10.672v10.67
				h-10.672V170.63z"
            />
            <path
              d="M191.973,309.356h-32.014c-5.894,0-10.671,4.778-10.671,10.671v32.012c0,5.893,4.778,10.671,10.671,10.671h32.014
				c5.893,0,10.671-4.779,10.671-10.671v-32.012C202.644,314.134,197.866,309.356,191.973,309.356z M181.301,341.368H170.63v-10.669
				h10.671V341.368z"
            />
            <path
              d="M394.724,266.673h-41.618c-5.893,0-10.671,4.779-10.671,10.671s4.779,10.671,10.671,10.671h30.947v30.943
				c0,5.893,4.779,10.671,10.671,10.671s10.671-4.779,10.671-10.671v-41.614C405.396,271.451,400.618,266.673,394.724,266.673z"
            />
            <path
              d="M394.724,342.435c-5.893,0-10.671,4.778-10.671,10.671v30.949h-96.039v-13.873c0-5.893-4.779-10.671-10.671-10.671
				c-5.894,0-10.671,4.779-10.671,10.671v24.544c0,5.893,4.778,10.671,10.671,10.671h117.381c5.893,0,10.671-4.779,10.671-10.671
				v-41.62C405.396,347.212,400.618,342.435,394.724,342.435z"
            />
            <path
              d="M318.959,266.673h-41.616c-5.894,0-10.671,4.779-10.671,10.671v58.271c0,0.07,0.01,0.139,0.011,0.209
				c-0.001,0.07-0.011,0.139-0.011,0.209c0,5.893,4.778,10.671,10.671,10.671h21.343c5.893,0,10.671-4.779,10.671-10.671
				c0-5.894-4.779-10.671-10.671-10.671h-10.671v-37.347h30.945c5.893,0,10.671-4.779,10.671-10.671
				C329.63,271.451,324.853,266.673,318.959,266.673z"
            />
            <path
              d="M322.16,336.034c0,5.893,4.779,10.671,10.671,10.671h6.402c5.893,0,10.671-4.779,10.671-10.671
				c0-5.894-4.779-10.671-10.671-10.671h-6.402C326.939,325.363,322.16,330.141,322.16,336.034z"
            />
            <path
              d="M206.287,441.538c-26.27-7.04-50.309-19.522-70.866-36.141h99.236c5.893,0,10.671-4.779,10.671-10.671V277.344
				c0-5.893-4.779-10.671-10.671-10.671H117.274c-5.893,0-10.671,4.779-10.671,10.671v99.237
				c-16.618-20.557-29.101-44.596-36.141-70.865c-1.526-5.692-7.38-9.074-13.069-7.546c-5.693,1.526-9.072,7.377-7.546,13.069
				c19.672,73.413,77.498,131.24,150.914,150.914c0.925,0.248,1.855,0.367,2.769,0.367c4.711,0,9.024-3.145,10.301-7.912
				C215.358,448.915,211.978,443.063,206.287,441.538z M127.946,288.015h96.039v96.039h-96.039V288.015z"
            />
            <path
              d="M311.239,49.846c-5.688-1.526-11.543,1.853-13.069,7.545c-1.526,5.693,1.852,11.544,7.546,13.07
				c26.272,7.041,50.311,19.524,70.87,36.144h-99.243c-5.894,0-10.671,4.779-10.671,10.671v117.381
				c0,5.894,4.778,10.671,10.671,10.671h117.381c5.893,0,10.671-4.778,10.671-10.671v-99.242
				c16.62,20.558,29.102,44.598,36.141,70.867c1.277,4.768,5.589,7.913,10.301,7.913c0.913,0,1.844-0.118,2.768-0.367
				c5.693-1.525,9.072-7.376,7.546-13.069C442.483,127.346,384.657,69.518,311.239,49.846z M384.053,223.985h-96.039v-96.039h96.039
				V223.985z"
            />
            <path
              d="M249.624,447.976c-2.706-0.093-5.396-0.238-7.995-0.432c-5.887-0.445-10.999,3.967-11.44,9.843
				c-0.441,5.878,3.967,10.999,9.843,11.44c2.888,0.217,5.869,0.378,8.865,0.48c0.124,0.004,0.247,0.006,0.37,0.006
				c5.725,0,10.462-4.542,10.658-10.307C260.127,453.114,255.514,448.177,249.624,447.976z"
            />
            <path
              d="M271.181,64.486c5.531,0,10.209-4.268,10.63-9.874c0.441-5.877-3.967-10.999-9.843-11.44
				c-2.871-0.214-5.851-0.377-8.859-0.481c-5.91-0.205-10.83,4.406-11.035,10.296c-0.204,5.891,4.405,10.83,10.295,11.034
				c2.723,0.094,5.416,0.241,8.002,0.434C270.644,64.475,270.914,64.486,271.181,64.486z"
            />
          </symbol>
          <symbol id="home" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"></path>
          </symbol>
          <symbol id="speedometer2" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"></path>
            <path
              fillRule="evenodd"
              d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
            ></path>
          </symbol>
          <symbol id="table" viewBox="0 0 16 16">
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"></path>
          </symbol>
          <symbol id="people-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            ></path>
          </symbol>
          <symbol id="grid" viewBox="0 0 16 16">
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
          </symbol>
          <symbol id="collection" viewBox="0 0 16 16">
            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"></path>
          </symbol>
          <symbol id="calendar3" viewBox="0 0 16 16">
            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"></path>
            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
          </symbol>
          <symbol id="chat-quote-fill" viewBox="0 0 16 16">
            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"></path>
          </symbol>
          <symbol id="cpu-fill" viewBox="0 0 16 16">
            <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
            <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z"></path>
          </symbol>
          <symbol id="gear-fill" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>
          </symbol>
          <symbol id="speedometer" viewBox="0 0 16 16">
            <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"></path>
            <path
              fillRule="evenodd"
              d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
            ></path>
          </symbol>
          <symbol id="toggles2" viewBox="0 0 16 16">
            <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"></path>
            <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"></path>
            <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
          </symbol>
          <symbol id="tools" viewBox="0 0 16 16">
            <path d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path>
          </symbol>
          <symbol id="chevron-right" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            ></path>
          </symbol>
          <symbol id="geo-fill" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
            ></path>
          </symbol>
        </svg>
        {width > 450 ? (
          <div
            style={{ minWidth: "250px", maxWidth: "270px", overflowY: "auto" }}
            className="d-flex flex-column flex-shrink-0 p-3 text-white"
          >
            <p className="__subtitle" style={{ paddingLeft: "15px" }}>
              MASTER
            </p>
            <ul className="nav nav-pills flex-column mb-auto">
              <li>
                <NavLink
                  to="/d/company"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  <svg className="m_icon bi me-2" width="16" height="16">
                    <use xlinkHref="#home"></use>
                  </svg>
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/chartofaccount" className="nav-link text-white">
                  <i className="m_icon bi bi-bar-chart-steps me-2"></i>
                  Chart Of Account
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/customer" className="nav-link text-white">
                  <svg className="m_icon bi me-2" width="16" height="16">
                    <use xlinkHref="#table" />
                  </svg>
                  Customer
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/user" className="nav-link text-white">
                  <i className="m_icon bi bi-person-square"></i>
                  User
                </NavLink>
              </li>
            </ul>
            <hr />
            <p className="__subtitle" style={{ paddingLeft: "15px" }}>
              ACTIVITY
            </p>
            <ul className="nav nav-pills flex-column mb-auto">
              {/* <li>
                <NavLink to="/d/order" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-plus"></i>
                  Penjualan Kredit
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/payment" className="nav-link text-white">
                  <i className="m_icon bi bi-journal-plus"></i>
                  Pembelian Kredit
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/order" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-plus"></i>
                  Penerimaan Kas
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/payment" className="nav-link text-white">
                  <i className="m_icon bi bi-journal-plus"></i>
                  Pembayaran Kas
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/d/journal" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-break"></i>
                  Journal
                </NavLink>
              </li>

              <li>
                <NavLink to="/d/depreciation" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-break"></i>
                  Depresiasi
                </NavLink>
              </li>
            </ul>
            <hr />
            <p className="__subtitle" style={{ paddingLeft: "15px" }}>
              REPORT
            </p>

            <ul className="nav nav-pills flex-column mb-auto">
              <li>
                <NavLink to="/d/profitandloss" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-diff"></i>Trial
                  Balance
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/profitandloss" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-diff"></i>Profit &
                  Loss
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/profitandloss" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-diff"></i>Equity
                  Change
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/generalledger" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-spreadsheet"></i>
                  General Ledger
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/cashflow" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-medical"></i>Cash Flow
                </NavLink>
              </li>
            </ul>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li>
                <NavLink
                  to={"/login"}
                  className="nav-link text-white"
                  onClick={handleLogout}
                >
                  <i className="m_icon bi bi-box-arrow-right"></i>
                  Log Out
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div
            className="m__menu"
            style={{ left: { true: "-240px", false: "-20px" }[data.width] }}
          >
            <div
              className="m__menu_toggle"
              onClick={(e) => setData({ ...data, width: !data.width })}
            >
              <i
                className={
                  { true: "m_icon bi bi-list", false: "m_icon bi bi-x-lg" }[
                    data.width
                  ]
                }
                style={{ color: "white" }}
              ></i>
            </div>
            <p className="__subtitle">MASTER</p>
            <ul className="nav nav-pills flex-column mb-auto">
              <li>
                <NavLink
                  to="/d/company"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  <svg className="m_icon bi me-2" width="16" height="16">
                    <use xlinkHref="#home"></use>
                  </svg>
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/chartofaccount" className="nav-link text-white">
                  <i className="m_icon bi bi-bar-chart-steps me-2"></i>
                  Chart Of Account
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/customer" className="nav-link text-white">
                  <svg className="m_icon bi me-2" width="16" height="16">
                    <use xlinkHref="#table" />
                  </svg>
                  Customer
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/user" className="nav-link text-white">
                  <i className="m_icon bi bi-person-square"></i>
                  User
                </NavLink>
              </li>
              <hr />
              <p className="__subtitle" style={{ paddingLeft: "15px" }}>
                ACTIVITY
              </p>
              <li>
                <NavLink to="/d/journal" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-break"></i>
                  Journal
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/profitandloss" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-diff"></i>Profit &
                  Loss
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/cashflow" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-medical"></i>Cash Flow
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/generalledger" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-spreadsheet"></i>
                  General Ledger
                </NavLink>
              </li>
              <hr />
              <p className="__subtitle" style={{ paddingLeft: "15px" }}>
                SALES
              </p>
              <li>
                <NavLink to="/d/order" className="nav-link text-white">
                  <i className="m_icon bi bi-file-earmark-plus"></i>
                  Order
                </NavLink>
              </li>
              <li>
                <NavLink to="/d/payment" className="nav-link text-white">
                  <i className="m_icon bi bi-journal-plus"></i>
                  Payment
                </NavLink>
              </li>
              <hr />
              <li>
                <NavLink
                  to={"/login"}
                  className="nav-link text-white"
                  onClick={handleLogout}
                >
                  <span className="glyphicon glyphicon-log-out me2"></span>
                  Log Out
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SideNav;
