// Generated with Ion on 1/23/2025, 4:29:15 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=29:14028
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type ContactButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: React.ReactNode;
	className?: string;
};

const buttonVariants = cva([
	'flex',
	'justify-center',
	'items-center',
	'px-4',
	'py-2',
	'rounded-lg',
	'border',
	'border-zinc-200',
	'text-[10px]',
	'leading-3',
	'font-medium',
	'text-[#666671]',
	'hover:bg-zinc-200',
	'hover:text-[#6f5d5d]',
	'transition-colors',
]);

const ContactButton = React.forwardRef<HTMLButtonElement, ContactButtonProps>(
	({ className, children = 'Contact', ...props }, ref) => {
		return (
			<button className={twMerge(clsx(buttonVariants(), className))} ref={ref} {...props}>
				{children}
			</button>
		);
	}
);

ContactButton.displayName = 'ContactButton';

export default ContactButton;
