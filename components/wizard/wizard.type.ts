import React from 'react'

export interface WizardStep {
  name: string
  component: React.FC<WizardStepProps>
}

export interface WizardStepProps {
  next: () => void
  prev: () => void
  goTo: (step: string) => void
}

export interface WizardProps {
  error?: string
  steps: WizardStep[]
}
