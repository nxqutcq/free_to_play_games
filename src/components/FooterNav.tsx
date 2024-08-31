import React from 'react'

interface FooterNavProps {
  items: { label: string; link?: string }[]
}

const FooterNav: React.FC<FooterNavProps> = ({ items }) => (
  <nav className="flex text-start">
    <ul className="md:items-start flex flex-col xs:items-start gap-5">
      {items.map((item, index) => (
        <li key={index}>
          <p className="hover:text-gray-500 transition-colors cursor-pointer">
            {item.link ? <a href={item.link}>{item.label}</a> : item.label}
          </p>
        </li>
      ))}
    </ul>
  </nav>
)

export default FooterNav
