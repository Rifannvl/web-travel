import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function BentoImage() {
  const images = [
    {
      title: "Raja Ampat",
      description: "Description for image 1",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Raja_Ampat_Islands_-_journal.pbio.1001457.g001.png",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 justify-center p-4">
        <figure className="relative">
          <img
            className="w-full rounded-lg shadow-lg object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Raja_Ampat_Islands_-_journal.pbio.1001457.g001.png" // Replace with your image URL
            alt="Raja Ampat"
          />
          <figcaption class="absolute px-4 text-lg text-white bottom-6">
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </figcaption>
        </figure>
        <figure className="relative">
          <img
            className="w-full rounded-lg shadow-lg object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Raja_Ampat_Islands_-_journal.pbio.1001457.g001.png" // Replace with your image URL
            alt="Raja Ampat"
          />
          <figcaption class="absolute px-4 text-lg text-white bottom-6">
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </figcaption>
        </figure>
        <figure className="relative">
          <img
            className="w-full rounded-lg shadow-lg object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Raja_Ampat_Islands_-_journal.pbio.1001457.g001.png" // Replace with your image URL
            alt="Raja Ampat"
          />
          <figcaption class="absolute px-4 text-lg text-white bottom-6">
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </figcaption>
        </figure>
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center p-4">
        <figure className="relative">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Raja_Ampat_Islands_-_journal.pbio.1001457.g001.png" // Replace with your image URL
            alt="Raja Ampat"
            className="w-full  rounded-lg shadow-lg object-cover"
          />
          <figcaption class="absolute px-4 text-lg text-white bottom-6">
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </figcaption>
        </figure>
        <div className="grid grid-cols-2 gap-4 justify-center ">
          <figure className="relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Raja_Ampat_Islands_-_journal.pbio.1001457.g001.png" // Replace with your image URL
              alt="Raja Ampat"
              className="w-full h-full  rounded-lg shadow-lg object-cover"
            />
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
              <p>
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </figcaption>
          </figure>
          <figure className="relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Raja_Ampat_Islands_-_journal.pbio.1001457.g001.png" // Replace with your image URL
              alt="Raja Ampat"
              className="w-full h-full  rounded-lg shadow-lg object-cover"
            />
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
              <p>
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
