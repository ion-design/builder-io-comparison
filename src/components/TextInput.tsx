// Generated with Ion on 1/23/2025, 5:17:16 AM
// Figma Link: https://www.figma.com/design/GzGS1XBtO8fnXGsjKDPiIf?node-id=173:3994
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	label?: string;
	helper?: string;
	error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, iconLeft, iconRight, label, helper, error, ...props }, ref) => {
		const generatedId = React.useId();
		const id = props.id ?? generatedId;

		return (
			<div className={clsx('flex flex-col gap-1', className)}>
				{label && (
					<label htmlFor={id} className="text-xs leading-5 font-medium text-[#0a111d]">
						{label}
					</label>
				)}
				<div
					className={twMerge(
						clsx(
							'bg-white overflow-hidden flex items-center gap-2 px-3 py-[5px] rounded-lg border shadow-[0_2px_8px_0_rgba(5,21,46,0.09)]',
							{
								'border-[#e7e8ee] focus-within:border-[#3d6ae8] focus-within:shadow-[0_2px_4px_0_rgba(5,21,46,0.04),0_0_0_2px_rgba(61,102,163,0.2)]':
									!error,
								'border-[#fc6f6f]': error,
							}
						)
					)}
				>
					{iconLeft}
					<input
						ref={ref}
						id={id}
						className="w-full text-xs leading-5 outline-none bg-transparent placeholder:text-[#8188a0]"
						aria-invalid={error}
						{...props}
					/>
					{iconRight}
				</div>
				{helper && <span className="text-xs leading-relaxed text-[#8188a0]">{helper}</span>}
			</div>
		);
	}
);

Input.displayName = 'Input';

export default Input;
