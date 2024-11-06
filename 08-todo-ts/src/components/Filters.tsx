import { TODO_FILTERS } from "../consts";
import { type TODO_FILTERS_VALUES } from "../types.d";

const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        literal: 'All',
        href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
        literal: 'Active',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
        literal: 'Completed',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    }
} as const;

interface Props {
    filterSelected: TODO_FILTERS_VALUES,
    handleFilterChange: (filter: TODO_FILTERS_VALUES) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, handleFilterChange }) => {
    const handleClick = (filter: TODO_FILTERS_VALUES) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        handleFilterChange(filter);
    };

    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                    const isSelected = key === filterSelected;
                    const className = isSelected ? 'selected' : '';

                    return (
                        <li key={key}>
                            <a href={href}
                                className={className}
                                onClick={handleClick(key as TODO_FILTERS_VALUES)}>{literal}
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
};