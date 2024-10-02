import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BentoImage() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center p-4">
        <figure className="relative">
          <img
            className="w-full rounded-lg shadow-lg object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Raja_Ampat_Islands_-_journal.pbio.1001457.g001.png" // Replace with your image URL
            alt="Raja Ampat"
          />
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <h3 className="text-xl items-center justify-center gap-2 flex font-bold">
              Raja Ampat is a beautiful island in Indonesia.
              <a href="https://en.wikipedia.org/wiki/Raja_Ampat_Islands">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className=" rounded-full border-2 border-white p-3"
                />
              </a>
            </h3>
          </figcaption>
        </figure>
        <figure className="relative">
          <img
            className="w-full h-full rounded-lg shadow-lg object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mount_Bromo_at_sunrise%2C_showing_its_volcanoes_and_Mount_Semeru_%28background%29.jpg/560px-Mount_Bromo_at_sunrise%2C_showing_its_volcanoes_and_Mount_Semeru_%28background%29.jpg" // Replace with your image URL
            alt="Mount Bromo"
          />
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <h3 className="text-xl items-center justify-center gap-2 flex font-bold">
              Mount Bromo is a volcano in Indonesia.
              <a href="https://id.wikipedia.org/wiki/Gunung_Bromo">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className=" rounded-full border-2 border-white p-3"
                />
              </a>
            </h3>
          </figcaption>
        </figure>
        <figure className="relative">
          <img
            className="w-full h-full rounded-lg shadow-lg object-cover"
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ_6o2tC9D6h3Vg4XZMPZ5Uvc_DEk9sQC9sKhholVBaXIxDCriTuMvGFgiFx-sLbxXrDHHqI1wo3TtEryB-br6QaXW1E_nQB_37EuEZaA" // Replace with your image URL
            alt="Labuan Bajo"
          />
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <h3 className="text-xl items-center justify-center gap-2 flex font-bold">
              Labuan Bajo is a small fishing town in Indonesia.
              <a href="https://id.wikipedia.org/wiki/Labuan_Bajo,_Komodo,_Manggarai_Barat">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className=" rounded-full border-2 border-white p-3"
                />
              </a>
            </h3>
          </figcaption>
        </figure>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center p-4">
        <figure className="relative">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg/576px-Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg" // Replace with your image URL
            alt="Tugu Yogyakarta"
            className="w-full  rounded-lg shadow-lg object-cover"
          />
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <h3 className="text-xl items-center justify-center gap-2 flex font-bold">
              Tugu Yogyakarta is a monument in Indonesia.
              <a href="https://id.wikipedia.org/wiki/Kota_Yogyakarta">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className=" rounded-full border-2 border-white p-3"
                />
              </a>
            </h3>
          </figcaption>
        </figure>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center ">
          <figure className="relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Pura_Ulun_Danu_Bratan%2C_2022.jpg/576px-Pura_Ulun_Danu_Bratan%2C_2022.jpg" // Replace with your image URL
              alt="Pura Besakih"
              className="w-full h-full  rounded-lg shadow-lg object-cover"
            />
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <h3 className="text-xl items-center justify-center gap-2 flex font-bold">
                Pura Besakih is the largest and holiest temple complex in Bali,
                Indonesia.
                <a href="https://id.wikipedia.org/wiki/Bali">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" rounded-full border-2 border-white p-3"
                  />
                </a>
              </h3>
            </figcaption>
          </figure>
          <figure className="relative">
            <img
              src="https://mengenalindonesia.com/wp-content/uploads/2023/02/Banda-Neira-Uang-Seribu.webp" // Replace with your image URL
              alt="Banda Neira"
              className="w-full h-full  rounded-lg shadow-lg object-cover"
            />
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <h3 className="text-xl items-center justify-center gap-2 flex font-bold">
                Banda Neira is a small island in the Banda Sea, Indonesia.
                <a href="https://en.wikipedia.org/wiki/Banda_Neira">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" rounded-full border-2 border-white p-3"
                  />
                </a>
              </h3>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
