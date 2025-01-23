// Generated with Ion on 1/23/2025, 4:29:17 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=29:13922
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type MusicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: React.ReactNode;
	iconLeading?: React.ReactNode;
	iconTrailing?: React.ReactNode;
	color?: 'primary' | 'secondary' | 'tertiary';
};

const buttonVariants = cva(
	[
		'flex',
		'items-center',
		'justify-center',
		'gap-2',
		'px-4',
		'py-2',
		'rounded-lg',
		'text-xs',
		'font-bold',
		'text-white',
		'leading-4',
		'transition-colors',
	],
	{
		variants: {
			color: {
				primary: 'bg-zinc-900 hover:bg-[#43434b]',
				secondary: 'bg-[#7c99b7] hover:bg-[#45586c]',
				tertiary: 'bg-[#b19473] hover:bg-[#e2c19b]',
			},
		},
		defaultVariants: {
			color: 'primary',
		},
	}
);

const MusicButton = React.forwardRef<HTMLButtonElement, MusicButtonProps>(
	({ className, children, iconLeading, iconTrailing, color = 'primary', ...props }, ref) => {
		return (
			<button className={twMerge(clsx(buttonVariants({ color }), className))} ref={ref} {...props}>
				{iconLeading && <Slot className="h-3 w-3">{iconLeading}</Slot>}
				{children}
				{iconTrailing && <Slot className="h-3 w-3">{iconTrailing}</Slot>}
			</button>
		);
	}
);

MusicButton.displayName = 'MusicButton';

export default MusicButton;
