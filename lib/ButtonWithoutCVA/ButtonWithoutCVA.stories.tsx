import type { Meta, StoryObj } from '@storybook/react'

import { ButtonWithoutCVA } from './ButtonWithoutCVA'

const meta: Meta<typeof ButtonWithoutCVA> = {
	component: ButtonWithoutCVA
}

export default meta

type Story = StoryObj<typeof ButtonWithoutCVA>

export const Default: Story = {
	args: {
		children: 'Title'
	}
}

export const Emoji: Story = {
	args: {
		children: '😅'
	}
}
