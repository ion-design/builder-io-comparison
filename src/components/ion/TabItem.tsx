// Generated with Ion on 1/23/2025, 4:29:17 AM
// Figma Link: https://www.figma.com/design/Mck0YOlOESXRW2sjvamXQa?node-id=29:13907
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={clsx('flex w-fit items-center gap-2.5', className)}
		{...props}
	>
		{children}
	</TabsPrimitive.List>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content ref={ref} className={clsx(className)} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const Tab = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={clsx(
			'flex items-center justify-center rounded-lg px-3 py-1 text-xs font-semibold leading-4',
			'text-[#717179]',
			'data-[state=active]:bg-white data-[state=active]:text-black disabled:text-[#b2b2b7]',
			className
		)}
		{...props}
	>
		{children}
	</TabsPrimitive.Trigger>
));
Tab.displayName = TabsPrimitive.Trigger.displayName;

export { Tab, Tabs, TabsList, TabsContent };
