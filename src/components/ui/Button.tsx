import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  variant?: 'solid' | 'outlineLight' | 'outlineDark' | 'rose'
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
}

function Button({ children, variant = 'solid', to, href, onClick, type = 'button', disabled, className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-sans text-[11px] font-medium tracking-[3px] uppercase px-9 py-3.5 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
  const styles = {
    solid: 'bg-marigold text-wine-900 border border-marigold shadow-[0_6px_20px_rgba(225,180,88,0.25)]',
    outlineLight: 'border border-cream/60 text-cream hover:bg-cream hover:text-wine-900',
    outlineDark: 'border border-wine-700 text-wine-700 hover:bg-wine-700 hover:text-cream',
    rose: 'bg-rose text-cream border border-rose hover:bg-rose-700 hover:border-rose-700',
  }
  const classes = `${base} ${styles[variant]} ${className}`

  if (to) return <Link to={to} className={classes}>{children}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>
  return <button type={type} onClick={onClick} disabled={disabled} className={classes}>{children}</button>
}

export default Button
