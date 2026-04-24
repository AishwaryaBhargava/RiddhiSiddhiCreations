import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  variant?: 'outline' | 'solid'
  href?: string
  to?: string
  onClick?: () => void
  className?: string
}

function Button({ children, variant = 'outline', href, to, onClick, className = '' }: ButtonProps) {
  const base = 'inline-block font-sans text-[10px] font-400 tracking-[3.5px] uppercase transition-all duration-250 cursor-pointer px-10 py-3.5'
  const styles = {
    outline: 'border border-gold/60 text-gold hover:bg-gold hover:text-black',
    solid: 'bg-gold text-black border border-gold hover:bg-transparent hover:text-gold',
  }
  const classes = `${base} ${styles[variant]} ${className}`

  if (to) return <Link to={to} className={classes}>{children}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>
  return <button onClick={onClick} className={classes}>{children}</button>
}

export default Button