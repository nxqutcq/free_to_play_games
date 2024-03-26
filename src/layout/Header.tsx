import React from 'react'

import styles from '../styles/main.module.scss'

import { ModeToggle } from '@/components/mode-toggle'

const Header: React.FC = () => (
  <header className={styles['header-block']}>
    <ModeToggle />
  </header>
)

export default Header
