import React from 'react'
import { NavLink } from 'react-router-dom'

import { ROUTES } from '@/routes'

export const Jumbotron: React.FC = () => (
  <section className="relative select-none h-[34rem] overflow-hidden jumbotron-image bg-cover bg-no-repeat p-12 text-center text-white">
    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/80 bg-fixed">
      <div className="flex h-full items-center justify-center">
        <div className="text-white xs:px-3">
          <h2 className="select-none mb-4 text-3xl font-semibold">
            Discover the best free-to-play games!
          </h2>
          <p className="select-none mb-6 text-base font-semibold">
            Track what you've played and search for what to play next!
          </p>
          <NavLink to={ROUTES.GAMES}>
            <button
              type="button"
              className="select-none bg-stone-900/80 inline-block border-2 border-neutral-50 px-[2.5rem] py-[1rem] items-center uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              Browse Games
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  </section>
)
