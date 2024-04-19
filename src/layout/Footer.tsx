import React from 'react'

import {
  FacebookIcon,
  GithubIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/components/icons'
import { Separator } from '@/components/ui/separator'

const Footer: React.FC = () => (
  <footer className="flex w-full mx-auto items-center flex-col bg-stone-900">
    <Separator />
    <div className="h-[280px] flex flex-col w-full xl:w-[1200px] not-italic">
      <div className=" flex h-[200px] items-center gap-[140px]">
        <div className="text-white flex flex-row h-full items-center">
          <nav>
            <ul className="w-[200px] items-start flex flex-col gap-3">
              <li>
                <p className="hover:text-gray-500 transition-colors cursor-pointer">
                  About Us
                </p>
              </li>
              <li>
                <p className="hover:text-gray-500 transition-colors cursor-pointer">
                  API
                </p>
              </li>
              <li>
                <p className="hover:text-gray-500 transition-colors cursor-pointer">
                  Contact Us
                </p>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="w-[200px] items-start flex flex-col gap-3">
              <li>
                <p className="hover:text-gray-500 transition-colors cursor-pointer">
                  Help/FAQ
                </p>
              </li>
              <li>
                <p className="hover:text-gray-500 transition-colors cursor-pointer">
                  Support & Bugs
                </p>
              </li>
              <li>
                <p className="hover:text-gray-500 transition-colors cursor-pointer">
                  Sitemap
                </p>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="w-[200px] items-start flex flex-col gap-3">
              <li>
                <p className="hover:text-gray-500 transition-colors cursor-pointer">
                  Privacy Policy
                </p>
              </li>
              <li>
                <p className="hover:text-gray-500 transition-colors cursor-pointer">
                  Cookies Policy
                </p>
              </li>
              <li>
                <p className="hover:text-gray-500 transition-colors cursor-pointer">
                  Terms of Use
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex w-full mb-5">
        <Separator />
      </div>
      <div className="text-white flex flex-row mb-5 justify-between  items-center">
        <p className="text-xs">
          © 2024 All rights reserved. All trademarks are property of their
          respective owners.
        </p>
        <address>
          <ul className="flex flex-row gap-10 items-center">
            <li className="w-[25px] cursor-pointer">
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
            <li className="w-[25px] cursor-pointer">
              <YouTubeIcon className={'youtube'} />
            </li>
            <li className="w-[25px] cursor-pointer">
              <TwitterIcon className={'twitter'} />
            </li>
            <li className="w-[25px] cursor-pointer">
              <FacebookIcon className={'facebook'} />
            </li>
          </ul>
        </address>
      </div>
    </div>
  </footer>
)

export default Footer
