import React from "react";
import Cuisine from "../../assets/images/cuisine.jpg";
import HeroCenter from "./HeroCenter";

const cuisine = [
  {
    image:
      "https://cdn.manomano.com/images/images_products/1168060/T/31489147_1.jpg",
    lien: "https://www.manomano.fr/catalogue/p/atmosphera-chaise-de-table-assise-marron-cognac-effet-cuir-et-pieds-en-metal-32662457",
    price: 45,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/3017996/T/16793201_2.jpg",
    lien: "https://www.manomano.fr/p/chaise-tolix-industrielle-en-acier-et-metal-pour-cuisine-et-bars-steel-one-16473465?model_id=16473453",
    price: 70,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/272650/T/18764088_1.jpg",
    lien: "https://www.manomano.fr/p/table-de-salle-a-manger-140x70x76-cm-bois-de-manguier-brut-18435947?model_id=18433955",
    price: 272,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/5871919/T/27245494_1.jpg",
    lien: "https://www.manomano.fr/p/bklicht-5-lampe-a-suspension-a-flamme-i-matal-et-bois-i-e27-i-noir-mat-i-lampe-a-suspension-vintage-i-lampe-a-suspension-ratro-i-sans-ampoule-26949179",
    price: 55,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/5380911/T/20012122_1.jpg",
    lien: "https://www.manomano.fr/p/costway-etagere-murale-flottante-en-bois-et-metal-charge-maximal-16-kg-a-2-niveaux-porte-epices-pour-cuisine-etagere-rnagment-de-style-industrielle-pour-salle-de-bain-bureau-chambresalon-46337303?model_id=19693796",
    price: 35,
  },
  {
    image:
      "https://cdn.manomano.com/images/images_products/6754169/T/16052859_1.jpg",
    lien: "https://www.manomano.fr/p/homelody-robinet-de-cuisine-noir-bec-pivotant-a-360-mitigeur-devier-2-jets-au-choix-mitigeur-de-cuisine-design-retro-18385101",
    price: 41,
  },
];


const FicheCuisine = () => {
  return (
    <div className='relative h-full App font-open-sans bg-slate-50 text-center'>
      <section className="bg-[url('./assets/images/gradient.png')] bg-cover w-full bg-no-repeat bg-center">
        <div className='flex flex-col items-center justify-end w-full max-w-3xl min-h-[250px]  mx-auto md:pt-0'>
          <HeroCenter text="Industrial Kitchen" />
        </div>
      </section>
      <div className='container flex flex-col justify-center mx-auto place-content-center'>
        <hr class=' '></hr>
        <div className='flex flex-col justify-center mx-auto mt-2 place-content-center'>
          <img
            className='object-cover rounded '
            src={Cuisine} // mettre type
            alt=' salon'
          />
        </div>
        <h2 className='mt-4 text-3xl font-semibold text-blue-900'>
          Here the articles available on our website:{" "}
        </h2>
        <div className='inline-grid grid-cols-3 gap-3 mt-4 mb-4'>
          {cuisine.map(
            (
              object 
            ) => (
              <div className='px-6 pt-10 pb-8 bg-white shadow-lg hover:shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10'>
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
            )
          )}
        </div>
        <hr class=''></hr>
        <p class=''>
          <div
            href=''
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
       '          >
            New Inspiration!
          </div>
        </p>
      </div>
      <div />
    </div>
  );
};

export default FicheCuisine;
