import React, { useState, useEffect } from 'react';
import LeadCard from './common/LeadCard';
import leads from '../data/leads.json';
import FilterBar from './common/FilterBar';
import { useSearch } from '../context/SearchContext';
import '../styles/main.scss';

type FilterState = {
  shortlist: string;
  time: string;
  more: string;
};

const Workspace: React.FC = () => {
  const [visibleLeads, setVisibleLeads] = useState(leads);
  const [filters, setFilters] = useState<FilterState>({
    shortlist: 'all',
    time: 'all-time',
    more: 'option1',
  });
  const { searchTerm } = useSearch();

  const handleFilterChange = (key: keyof FilterState) => (value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    let filteredLeads = [...leads];
    if (filters.time !== 'all-time') {
      const now = new Date();
      const timeFilters = {
        'last-week': new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
        'last-month': new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000),
      };
      
      filteredLeads = filteredLeads.filter(lead => {
        const leadDate = new Date(lead.time);
        return leadDate > timeFilters[filters.time as keyof typeof timeFilters];
      });
    }

    // Shortlist/Contacted filter
    switch (filters.shortlist) {
      case 'shortlisted':
        filteredLeads = filteredLeads.filter(lead => lead.liked);
        break;
      case 'contacted':
        filteredLeads = filteredLeads.filter(lead => lead.contacted);
        break;
      // 'all' case - no filtering needed
    }

    // Search filter
    if (searchTerm) {
      filteredLeads = filteredLeads.filter(lead =>
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setVisibleLeads(filteredLeads);
  }, [filters, searchTerm]);

  const handleDelete = (leadIndex: number) => {
    setVisibleLeads(prevLeads => 
      prevLeads.filter((_, index) => index !== leadIndex)
    );
  };

  return (
    <div className="workspace">
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      {visibleLeads.map((lead, index) => (
        <LeadCard
          key={index}
          name={lead.name}
          platform={lead.platform}
          group={lead.group}
          time={lead.time}
          source={lead.source}
          phone={lead.phone}
          message={lead.message}
          imageUrl={lead.imageUrl}
          liked={lead.liked}
          contacted={lead.contacted} 
          hidden={lead.hidden}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};

export default Workspace;