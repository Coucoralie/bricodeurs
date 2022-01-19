import React from "react";
import Salon from "../Salon.jpeg";

const FicheProduits = () => {
  return (
    <div>
      <h1 className='text-5xl font-semibold text-sky-500 mt-6'>Inspiration</h1>
      <div class='font-semibold mt-2'>
        <h1 class='font-semibold'>texte  ou pas ??? ?</h1>

        <div class='font-semibold'>6 produits visibles dans cette image</div>
      </div>
      <div className=' mt-4 container mx-auto flex flex-col justify-center place-content-center'>
			<hr class=" "></hr>
        <div className=' mx-auto flex flex-col justify-center place-content-center'>
          <img className=' object-cover rounded ' src={Salon} alt='Image salon' />
        </div>
				<h2 className='text-3xl font-semibold text-sky-500 mt-2'>Vous trouverez ici les 	articles détecté sur l'image et présente chez nous</h2>
        <div className='inline-grid grid-cols-3 gap-4 mt-2'>
          <a
            className='"relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">'
            data-testid='touchpoint-card'
            href='https://www.manomano.fr/catalogue/p/table-basse-120x120x40-cm-bois-de-manguier-brut-32817117?model_id=32797998'
          >
            <div class=''>
              <picture>
                <img
                  alt='table basse'
                  src='https://cdn.manomano.com/images/images_products/6333895/T/31561159_1.jpg'
                  height='400'
                  width='250'
                />
              </picture>
            </div>
            <div class=''>1 produit</div>
            <div class=''>Dès 120&nbsp;€</div>
          </a>
					<a
            className='"relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">'
            data-testid='touchpoint-card'
            href='https://www.manomano.fr/p/costway-canape-dangle-3-places-convertible-avec-meridienne-reversible-en-cuir-pu-gris-188x62x60cm-pour-salonappartementsejour-40216556'
          >
            <div class=''>
              <picture>
                <img
                  alt='canape'
                  src='https://cdn.manomano.com/images/images_products/5380911/T/28159004_1.jpg'
                  height='400'
                  width='250'
                />
              </picture>
            </div>
            <div class=''>1 produit</div>
            <div class=''>Dès 750&nbsp;€</div>
          </a>
					<a
            className='"relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">'
            data-testid='touchpoint-card'
            href='https://www.manomano.fr/p/fauteuil-en-metal-et-osier-naturel-atmosphera-12082044'
          >
            <div class=''>
              <picture>
                <img
                  alt='fauteuil osier'
                  src='https://cdn.manomano.com/images/images_products/3273479/T/12402576_1.jpg'
                  height='400'
                  width='250'
                />
              </picture>
            </div>
            <div class=''>1 produit</div>
            <div class=''>Dès 142&nbsp;€</div>
          </a>
          <a
            className='"relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">'
            data-testid='touchpoint-card'
            href='https://www.manomano.fr/p/desserte-roulante-chariot-de-cuisine-de-2-etages-avec-grand-plan-de-travail-en-acier-inox-sobuy-fkw47-w-5026016'
          >
            <div class=''>
              <picture>
                <img
                  alt='desserte'
                  src='https://cdn.manomano.com/images/images_products/3968002/T/7927830_1.jpg'
                  height='400'
                  width='250'
                />
              </picture>
            </div>
            <div class=''>1 produit</div>
            <div class=''>Dès 249&nbsp;€</div>
          </a>
					<a
            className='"relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">'
            data-testid='touchpoint-card'
            href='https://www.manomano.fr/p/plafonnier-industrielle-retro-25cm-en-forme-diamant-noir-suspension-luminaire-pour-salle-a-mangerbarchambre-12902327'
          >
            <div class=''>
              <picture>
                <img
                  alt='plafonnier'
                  src='https://cdn.manomano.com/images/images_products/11268239/T/21931676_1.jpg'
                  height='400'
                  width='250'
                />
              </picture>
            </div>
            <div class=''>1 produit</div>
            <div class=''>Dès 85&nbsp;€</div>
          </a>
          <a
            className='"relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">'
            data-testid='touchpoint-card'
            href='https://www.manomano.fr/p/papier-peint-pas-cher-30219-1-lutece-authentic-walls-en-ligne-2345388'
          >
            <div class=''>
              <picture>
                <img
                  alt='papier peint'
                  src='https://cdn.manomano.com/images/images_products/31911/T/16134106_2.jpg'
                  height='400'
                  width='250'
                />
              </picture>
            </div>
            <div class=''>1 produit</div>
            <div class=''>Dès 249&nbsp;€</div>
          </a>
        </div>
				<hr class=""></hr>
				<div class="h-50">
					Remet on un carousel avec d'autres inspiration ? ou une autre section
				</div>
      </div>
      <div />
    </div>
  );
};

export default FicheProduits;
