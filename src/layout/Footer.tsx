import React from 'react'

import { FacebookIcon, TwitterIcon, YouTubeIcon } from '@/components/icons'
import { Separator } from '@/components/ui/separator'

const Footer: React.FC = () => (
  <footer className="flex w-full mx-auto items-center flex-col">
    <Separator />
    <address className="h-[280px] flex flex-col w-full xl:w-[1200px] not-italic">
      <div className="flex h-[200px] items-center gap-[140px]">
        <div className="flex flex-row h-full items-center">
          <div className="w-[200px] items-start flex flex-col gap-3">
            <p className="hover:text-gray-500 transition-colors cursor-pointer">
              About Us
            </p>
            <p className="hover:text-gray-500 transition-colors cursor-pointer">
              API
            </p>
            <p className="hover:text-gray-500 transition-colors cursor-pointer">
              Contact Us
            </p>
          </div>
          <div className="w-[200px] items-start flex flex-col gap-3">
            <p className="hover:text-gray-500 transition-colors cursor-pointer">
              Help/FAQ
            </p>
            <p className="hover:text-gray-500 transition-colors cursor-pointer">
              Support & Bugs
            </p>
            <p className="hover:text-gray-500 transition-colors cursor-pointer">
              Sitemap
            </p>
          </div>
          <div className="w-[200px] items-start flex flex-col gap-3">
            <p className="hover:text-gray-500 transition-colors cursor-pointer">
              Privacy Policy
            </p>
            <p className="hover:text-gray-500 transition-colors cursor-pointer">
              Cookies Policy
            </p>
            <p className="hover:text-gray-500 transition-colors cursor-pointer">
              Terms of Use
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full mb-5">
        <Separator />
      </div>
      <div className="flex flex-row mb-5 justify-between  items-center">
        <p className="text-xs">
          © 2024 All rights reserved. All trademarks are property of their
          respective owners.
        </p>
        <div className="flex flex-row gap-10 items-center">
          <div className="w-[25px] cursor-pointer">
            <YouTubeIcon className={'youtube'} />
          </div>
          <div className="w-[25px] cursor-pointer">
            <TwitterIcon className={'twitter'} />
          </div>
          <div className="w-[25px] cursor-pointer">
            <FacebookIcon className={'facebook'} />
          </div>
        </div>
      </div>
    </address>
  </footer>
)

export default Footer
