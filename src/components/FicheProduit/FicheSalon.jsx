import React from "react";
import Salon from "../../assets/images/Salon.jpg";
import HeroCenter from "./HeroCenter";

const salon = [
  {
    image:
      "https://cdn.manomano.com/images/images_products/6333895/T/31561159_1.jpg",
    lien: "https://www.manomano.fr/catalogue/p/table-basse-120x120x40-cm-bois-de-manguier-brut-32817117?model_id=32797998",
    price: 277,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/5380911/T/28159004_1.jpg",
    lien: "https://www.manomano.fr/p/costway-canape-dangle-3-places-convertible-avec-meridienne-reversible-en-cuir-pu-gris-188x62x60cm-pour-salonappartementsejour-40216556",
    price: 420,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/3273479/T/12402576_1.jpg",
    lien: "https://www.manomano.fr/p/fauteuil-en-metal-et-osier-naturel-atmosphera-12082044",
    price: 100,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/3968002/T/7927830_1.jpg",
    lien: "https://www.manomano.fr/p/desserte-roulante-chariot-de-cuisine-de-2-etages-avec-grand-plan-de-travail-en-acier-inox-sobuy-fkw47-w-5026016",
    price: 135,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/11268239/T/21931676_1.jpg",
    lien: "https://www.manomano.fr/p/plafonnier-industrielle-retro-25cm-en-forme-diamant-noir-suspension-luminaire-pour-salle-a-mangerbarchambre-12902327",
    price: 19,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/31911/T/16134106_2.jpg",
    lien: "https://www.manomano.fr/p/papier-peint-pas-cher-30219-1-lutece-authentic-walls-en-ligne-2345388",
    price: 12,
  },
];

const FicheSalon = () => {
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
          <img className='object-cover rounded ' src={Salon} alt=' salon' />
        </div>
        <h2 className='mt-4 text-3xl font-semibold text-blue-900 text-center'>
          Here the articles available on our website:{" "}
        </h2>
        <div className='inline-grid grid-cols-3 gap-3 mt-4 mb-4'>
          {salon.map((object) => (
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

export default FicheSalon;
