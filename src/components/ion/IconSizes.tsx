// Generated with Ion on 1/23/2025, 5:17:08 AM
// Figma Link: https://www.figma.com/design/GzGS1XBtO8fnXGsjKDPiIf?node-id=31:1296
import clsx from 'clsx';
type IconSizesProps = {
	size?: 'large' | 'medium' | 'small' | 'xsmall';
	iconType?: 'awesome' | 'hero';
	className?: string;
};

function IconSizes({ size = 'large', iconType = 'hero', className = '' }: IconSizesProps) {
	const sizeImages: Record<NonNullable<IconSizesProps['size']>, string> = {
		large: '/images/text-input/Size=Large,-Icon-type=Hero-31-1297.svg',
		medium: '/images/text-input/Size=Medium,-Icon-type=Hero-31-1299.svg',
		small: '/images/text-input/Size=Small,-Icon-type=Hero-31-1301.svg',
		xsmall: '/images/text-input/Size=xsmall,-Icon-type=Hero-31-1303.svg',
	};

	return (
		<img
			src={sizeImages[size]}
			alt="Size=Large, Icon type=Hero"
			className={clsx(
				{
					'h-6 w-6': size === 'large',
					'h-5 w-5': size === 'medium',
					'h-4 w-4': size === 'small',
					'h-3 w-3': size === 'xsmall',
					relative: iconType === 'awesome',
				},
				className
			)}
		/>
	);
}
export default IconSizes;
