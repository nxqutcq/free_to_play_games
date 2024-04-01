import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FrequentlyAskedQuestions: React.FC = () => (
  <div className="flex w-full flex-col mb-10">
    <h3 className="xs3:mb-0 mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
      Frequently Asked Questions:
    </h3>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            What is FreeToGame?
          </h4>
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            FreeToGame.com is a gaming platform that brings together the best
            Free-to-Play Multiplayer Online Games and MMO Games into one
            convenient place. Not only does it offer a curated selection of free
            games across various genres, but it also rewards gamers with free
            premium loot and exclusive perks.{' '}
          </p>
        </AccordionContent>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Additionally, users can maintain their own games library, track
            their gaming history, and easily search for their next favorite
            game. Whether you're into MMORPGs, MOBAs, FPS, or strategy games,
            FreeToGame offers a comprehensive gaming experience tailored to your
            interests.
          </p>
        </AccordionContent>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            FreeToGame also offers a free public API that can be accessed
            without any restrictions or the need to create an account. This
            Free-To-Play Games Database API provides developers and enthusiasts
            with valuable data to enhance their gaming projects.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            What is free-to-play in games?
          </h4>
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Free-to-play games are those amazing titles you can jump into
            without any upfront cost. Not all games are created equal, but the
            bottom line is, you should be able to enjoy the game without ever
            needing to open your wallet.
          </p>
        </AccordionContent>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            You have the freedom to test out a free-to-play game for as long as
            you like, really get a feel for it, and if it clicks with you,
            there's also the option to treat yourself to some cool extras like
            skins, weapons, or expansions.
          </p>
        </AccordionContent>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            However, it's important to note that those paid extras should always
            be completely optional. A good free-to-play game should never
            obligate you to spend any money.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Can I play PC games for free?
          </h4>
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Absolutely! There's a plethora of PC games available for free. Many
            games follow a 'free-to-play' model, meaning you can download and
            start playing them without spending a dime.
          </p>
        </AccordionContent>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            While most free-to-play games offer optional in-game purchases for
            extra content or customization, the core experience is usually
            completely free.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Are free-to-play games free?
          </h4>
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Free-to-play games are indeed free to install and play initially.
            However, once players delve into the game, they often encounter
            optional opportunities to purchase additional content such as items,
            maps, and customization options. Some games also integrate in-game
            advertising as a means to generate income.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
)

export default FrequentlyAskedQuestions
