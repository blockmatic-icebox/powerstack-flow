import { W } from 'windstitch'

import { ButtonVariants } from './button.component'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantsProps {
  label: string
  onClick: () => void
}

export type ButtonVariantsProps = W.Infer<typeof ButtonVariants>
