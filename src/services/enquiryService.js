// Service to submit enquiries to backend API using environment variable with offline localStorage fallback

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
const STORAGE_KEY = 'ahmed_facility_enquiries';

export const saveEnquiry = async (enquiry) => {
  // Try sending to backend API
  try {
    const res = await fetch(`${API_BASE}/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enquiry),
    });
    
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        // Also update local storage for offline resiliency
        const localData = getLocalEnquiries();
        localStorage.setItem(STORAGE_KEY, JSON.stringify([data.data, ...localData]));
        return data.data;
      }
    }
  } catch (err) {
    console.warn('Backend API unavailable, saving to localStorage:', err.message);
  }

  // Fallback if backend is offline
  const current = getLocalEnquiries();
  const newEnquiry = {
    ...enquiry,
    id: `ENQ-${Math.floor(100 + Math.random() * 900)}`,
    status: 'New',
    createdAt: new Date().toLocaleDateString('en-GB') + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
  const updated = [newEnquiry, ...current];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newEnquiry;
};

const getLocalEnquiries = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
};
