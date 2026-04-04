import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  onSnapshot,
  where,
  getDocs,
  Firestore
} from 'firebase/firestore';
import { db, LeadData, Lead } from './config';

// Add a new lead to Firestore
export const addLead = async (leadData: Omit<LeadData, 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'leads'), {
      ...leadData,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

// Delete a lead from Firestore
export const deleteLead = async (leadId: string) => {
  try {
    await deleteDoc(doc(db, 'leads', leadId));
  } catch (error) {
    throw error;
  }
};

// Get real-time updates for all leads
export const getLeadsRealtime = (callback: (leads: Lead[]) => void) => {
  const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
  
  return onSnapshot(q, (snapshot) => {
    const leads = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    })) as Lead[];
    
    callback(leads);
  }, (error) => {
    console.error('Error fetching leads:', error);
  });
};

// Search leads by name, email, or phone
export const searchLeads = async (searchTerm: string) => {
  try {
    const leadsRef = collection(db, 'leads');
    const q = query(leadsRef, orderBy('createdAt', 'desc'));
    
    const snapshot = await getDocs(q);
    const leads = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    })) as Lead[];
    
    // Filter leads based on search term
    if (!searchTerm.trim()) return leads;
    
    const searchLower = searchTerm.toLowerCase();
    return leads.filter(lead => 
      lead.name.toLowerCase().includes(searchLower) ||
      lead.email.toLowerCase().includes(searchLower) ||
      lead.phone.includes(searchTerm) ||
      lead.message.toLowerCase().includes(searchLower)
    );
  } catch (error) {
    throw error;
  }
};

// Get leads by date range
export const getLeadsByDateRange = async (startDate: Date, endDate: Date) => {
  try {
    const leadsRef = collection(db, 'leads');
    const q = query(
      leadsRef,
      where('createdAt', '>=', startDate),
      where('createdAt', '<=', endDate),
      orderBy('createdAt', 'desc')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    })) as Lead[];
  } catch (error) {
    throw error;
  }
};
