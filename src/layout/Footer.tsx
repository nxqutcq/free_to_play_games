import React from 'react'

import FooterNav from '@/components/FooterNav'
import {
  FacebookIcon,
  GithubIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/components/icons'
import { Separator } from '@/components/ui/separator'
import { footerNavItems1, footerNavItems2, footerNavItems3 } from '@/constants'

const Footer: React.FC = () => (
  <footer className="flex w-full mx-auto items-center flex-col bg-stone-900">
    <Separator />
    <div className="h-[280px] xs:h-[fit-content] flex xs:pt-5 xs:items-center md:items-start px-[1rem] flex-col w-full max-w-[1140px] not-italic">
      <div className="flex w-full items-center xs3:justify-start xs:justify-center flex-wrap gap-5 text-sm xs:h-[fit-content] md:min-h-[180px] mb-5 overflow-hidden">
        <FooterNav items={footerNavItems1} />
        <FooterNav items={footerNavItems2} />
        <FooterNav items={footerNavItems3} />
      </div>
      <div className="flex w-full mb-5">
        <Separator />
      </div>
      <div className="text-white flex md:flex-row mb-5 xs:flex-col xs:gap-5 justify-between w-full items-center">
        <p className="text-xs my-3 xs:px-5 md:px-0">
          © 2024 All rights reserved. All trademarks are property of their
          respective owners.
        </p>
        <address>
          <ul className="flex flex-row gap-10 items-center">
            <li className="icon-container w-[1.45rem] cursor-pointer">
              <a
                aria-label="Repository link"
                draggable={false}
                target="_blank"
                rel="noopener noreferrer"
                href={'https://github.com/Vladnel671/free_to_play_games'}
              >
                <GithubIcon className={'github'} />
              </a>
            </li>
            <li className="w-[1.45rem] cursor-pointer">
              <YouTubeIcon className={'youtube'} />
            </li>
            <li className="w-[1.45rem] cursor-pointer">
              <TwitterIcon className={'twitter'} />
            </li>
            <li className="w-[1.45rem] cursor-pointer">
              <FacebookIcon className={'facebook'} />
            </li>
          </ul>
        </address>
      </div>
    </div>
  </footer>
)

export default Footer
