export interface IssueCardProps {
	issueNumber: string;
	title: string;
	assigneeImageUrl: string;
}

export interface ColumnProps {
	title: string;
	issues: IssueCardProps[];
}

export interface SidebarItemProps {
	icon: string;
	label: string;
	isActive?: boolean;
	hasSubItems?: boolean;
	subItems?: string[];
}

export interface SidebarSectionProps {
	title?: string;
	items: SidebarItemProps[];
}
