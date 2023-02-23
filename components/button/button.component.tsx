import { w } from 'windstitch'

import { ButtonProps } from './button.type'

export function Button({ label, ...props }: ButtonProps) {
  return <ButtonVariants {...props}>{label}</ButtonVariants>
}

export const ButtonVariants = w.button(
  'px-4 py-2 m-2 text-gray-700 transition duration-500  border rounded-md select-none ease focus:outline-none focus:shadow-outline',
  {
    variants: {
      variant: {
        primary: 'bg-indigo-500 border-indigo-500 text-white hover:bg-indigo-600 ',
        secondary: 'text-gray-700  bg-gray-200 border-gray-200 hover:bg-gray-300 ',
      },
    },
    defaultVariants: {
      variant: 'secondary',
    },
  },
)

ButtonVariants.displayName = 'ButtonVariants'
