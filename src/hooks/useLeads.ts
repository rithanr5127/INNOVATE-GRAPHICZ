import { useState, useEffect } from 'react';
import { Lead } from '../firebase/config';
import { getLeadsRealtime, searchLeads } from '../firebase/firestore';

export const useLeads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const unsubscribe = getLeadsRealtime((fetchedLeads) => {
      setLeads(fetchedLeads);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const deleteLead = async (leadId: string) => {
    try {
      const { deleteLead: deleteLeadFromFirebase } = await import('../firebase/firestore');
      await deleteLeadFromFirebase(leadId);
    } catch (error) {
      setError('Failed to delete lead');
      console.error('Delete lead error:', error);
    }
  };

  const search = async (searchTerm: string) => {
    try {
      setLoading(true);
      const searchResults = await searchLeads(searchTerm);
      setLeads(searchResults);
    } catch (error) {
      setError('Failed to search leads');
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => {
    // This will trigger the real-time listener to refresh
    const unsubscribe = getLeadsRealtime((fetchedLeads) => {
      setLeads(fetchedLeads);
      setLoading(false);
    });
    return unsubscribe;
  };

  return {
    leads,
    loading,
    error,
    deleteLead,
    search,
    refresh
  };
};
