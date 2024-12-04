import { NavBar } from 'antd-mobile'
import { ReactNode } from 'react'

interface INavHeaderProps {
	children: string
	backIcon?: boolean
	onLeftClick?: () => void
	className?: string
	rightContent?: Array<ReactNode>
}

export default function NavHeader({
	children,
	backIcon = true,
	onLeftClick,
	className,
	rightContent,
}: INavHeaderProps) {
	const defaultHandler = () => window.history.go(-1)
	return (
		<NavBar
			className={['navBar', className || ''].join(' ')}
			backIcon={backIcon}
			onBack={onLeftClick || defaultHandler}
			right={rightContent}
		>
			{children}
		</NavBar>
	)
}
