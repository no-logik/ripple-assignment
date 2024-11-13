import '../../styles/main.scss';

// Define type for dropdown options
type DropdownOption = {
  label: string;
  value: string;
};

// Define type for filter state
type FilterState = {
  shortlist: string;
  time: string;
  more: string;
};

// Move constants outside component to prevent recreating on each render
const FILTER_OPTIONS = {
  shortlist: [
    { label: 'All', value: 'all' },
    { label: 'Shortlisted', value: 'shortlisted' },
    { label: 'Contacted', value: 'contacted' },
  ],
  time: [
    { label: 'All Time', value: 'all-time' },
    { label: 'Last Week', value: 'last-week' },
    { label: 'Last Month', value: 'last-month' },
  ],
  more: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ],
} as const;

// Separate Dropdown component for better reusability
const Dropdown = ({
  options,
  value,
  onChange,
}: {
  options: readonly DropdownOption[];
  value: string;
  onChange: (value: string) => void;
}) => (
  <select
    className="dropdown"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    {options.map(({ label, value }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState) => (value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  // Use single state object for related state
  // const [localFilters, setLocalFilters] = useState<FilterState>({
  //   shortlist: 'shortlisted',
  //   time: 'all-time',
  //   more: 'option1',
  // });

  const handleFilterChange = (key: keyof FilterState) => (value: string) => {
    onFilterChange(key)(value);
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar__left">
        <h2 className="filter-bar__title">Leads</h2>
        <div className="tooltip">
          <span className="tooltip__icon" aria-label="Information">ⓘ</span>
          <span className="tooltip__text">Information about Leads</span>
        </div>
      </div>

      <div className="filter-bar__right">
        <Dropdown
          options={FILTER_OPTIONS.shortlist}
          value={filters.shortlist}
          onChange={handleFilterChange('shortlist')}
        />
        <Dropdown
          options={FILTER_OPTIONS.time}
          value={filters.time}
          onChange={handleFilterChange('time')}
        />
        <Dropdown
          options={FILTER_OPTIONS.more}
          value={filters.more}
          onChange={handleFilterChange('more')}
        />
      </div>
    </div>
  );
};

export default FilterBar;
