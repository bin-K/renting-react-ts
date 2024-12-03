import { NavBar } from 'antd-mobile'
import { ReactNode } from 'react'

interface INavHeaderProps {
  children: string
  history?: History
  onLeftClick?: () => void
  className?: string
  rightContent?: Array<ReactNode>
}

export default function NavHeader({ children, history, onLeftClick, className, rightContent }:INavHeaderProps) {
  const defaultHandler = () => history?.go(-1)
  return (
    <NavBar
      className={['navBar', className || ''].join(' ')}
      backIcon
      onBack={onLeftClick || defaultHandler }
      right={rightContent}
    >
      {children}
    </NavBar>
  )
}