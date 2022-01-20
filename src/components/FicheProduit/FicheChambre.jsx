import React from "react";

import Chambre from "../../assets/images/chambre.jpg";
import HeroCenter from "./HeroCenter";

const chambre = [
  {
    image:
      "https://cdn.manomano.com/images/images_products/18971068/T/33662797_1.jpg",
    lien: "https://www.manomano.fr/p/lampe--poser-en-verre-craquele-sila-39cm-beige-35063098?model_id=35043979",
    price: 35,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/14509893/T/39692711_1.jpg",
    lien: "https://www.manomano.fr/p/rideaux-occultants-et-anneaux-2pcs-velours-bleu-fonce-140x175cm-40440305?model_id=40567026",
    price: 46,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/17098829/T/29422183_1.jpg",
    lien: "https://www.manomano.fr/p/chaise-design-monark-blanc-pieds-en-bois-naturel-30529803?model_id=30510685",
    price: 166,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/272650/T/26914329_1.jpg",
    lien: "https://www.manomano.fr/p/porte-80x210-cm-bois-de-pin-massif-26611176?model_id=26592067",
    price: 116,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/98348/T/19574069_1.jpg",
    lien: "https://www.manomano.fr/p/tete-de-lit-3-panneaux-cannage-et-rotin-noir-165-noir-40870502?model_id=19255528",
    price: 104,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/4388915/T/15557818_1.jpg",
    lien: "https://www.manomano.fr/p/table-de-nuit-noire-carree-table-dappoint-tiroir-en-bois-structure-metallique-doree-50x50x50cm-noir-14668705",
    price: 328,
  },
];

const FicheChambre = () => {
  return (
    <div className='relative h-full App font-open-sans bg-slate-50 text-center'>
      <section className="bg-[url('./assets/images/gradient.png')] bg-cover w-full bg-no-repeat bg-center">
        <div className='flex flex-col items-center justify-end w-full max-w-3xl min-h-[250px]  mx-auto md:pt-0'>
          <HeroCenter
            text="Now let's see what ManoLens found for you "
            title='Your Inspiration'
          />
        </div>
      </section>
      <div className='container flex flex-col justify-center mx-auto place-content-center'>
        <hr class=' '></hr>
        <div className='flex flex-col justify-center mx-auto mt-2 place-content-center'>
          <img className='object-cover rounded ' src={Chambre} alt=' salon' />
        </div>
        <h2 className='mt-4 text-3xl font-semibold text-blue-900'>
          Here the articles available on our website:{" "}
        </h2>
        <div className='inline-grid grid-cols-3 gap-3 mt-4 mb-4'>
          {chambre.map((object) => (
            <div className='transition-all duration-200 ease-in-out hover:scale-105 px-6 pt-10 pb-8 bg-white shadow-lg hover:shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10'>
              <div class=''>
                <picture>
                  <img
                    alt='table basse'
                    src={object.image}
                    height='400'
                    width='250'
                  />
                </picture>
              </div>
              <div class=''>1 product</div>
              <div class=''>From {object.price}&nbsp;€</div>
              <a
                href={object.lien}
                class='
 	                       inline-block
										 mt-2
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-grey hover:shadow-lg hover:shadow-black-500/50 
                     transition
                     bg-custom-green
                     '
              >
                View Details
              </a>
            </div>
          ))}
        </div>
        <hr class=''></hr>
        <p class=''>
          <a
            href='/'
            target='_blank'
            class='
            inline-block
            bg-white
       mt-4
       mb-6
       py-3
       px-10
       border border-[#E5E7EB]l
       text-base text-body-color
       font-medium
       hover:border-primary hover:bg-grey hover:shadow-lg hover:shadow-black-500/50 
       transition
       '
          >
            New Inspiration!
          </a>
        </p>
      </div>
      <div />
    </div>
  );
};

export default FicheChambre;
