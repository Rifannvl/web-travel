import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faMoneyBillWave,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  mt-10">
      <div className="p-4 max-w-lg grid grid-cols-1">
        <h2 className="text-2xl font-bold">Experience The New Adventure</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          suscipit reprehenderit eius quia libero neque vitae eos quo omnis!
          Aperiam.
        </p>
        <ul className="mt-4 gap-4 space-y-2">
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faPlane}
              className="mr-2 bg-black text-white rounded-full p-3"
            />
            <div>
              <h4 className="text-xl font-bold">Save Traveling</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                aspernatur?
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faMoneyBillWave}
              className="mr-2 bg-black text-white rounded-full p-3"
            />
            <div>
              <h4 className="text-xl font-bold">Save Costs</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                aspernatur?
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faHeart}
              className="mr-2 bg-black text-white rounded-full p-3"
            />
            <div>
              <h4 className="text-xl font-bold">Travel with Love</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                aspernatur?
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="p-4 w-full grid col-span-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSLDvLh8he9QwOEF3gGWi8wSIdTN2vGbQG7936mhVFMS4oo8d-5Fu03_KYq3WYFR0SiV4it4RRfUOKnv_kSE9UrbNvKOAomtxVaMwJXQw"
          alt="Beautiful view of Yogyakarta"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
