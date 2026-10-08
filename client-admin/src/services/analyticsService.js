const API_BASE_URL = "http://localhost:5000/api/admin/analytics";

const getHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };
};

export const fetchAnalyticsSummary = async () => {
  const res = await fetch(`${API_BASE_URL}/summary`, { headers: getHeaders() });
  if (!res.ok) throw new Error("Failed to fetch analytics summary");
  return res.json();
};

export const fetchMonthlyTrends = async () => {
  const res = await fetch(`${API_BASE_URL}/monthly`, { headers: getHeaders() });
  if (!res.ok) throw new Error("Failed to fetch monthly trends");
  return res.json();
};

export const fetchCountryDistribution = async () => {
  const res = await fetch(`${API_BASE_URL}/countries`, { headers: getHeaders() });
  if (!res.ok) throw new Error("Failed to fetch country distribution");
  return res.json();
};

export const fetchIndustryDistribution = async () => {
  const res = await fetch(`${API_BASE_URL}/industries`, { headers: getHeaders() });
  if (!res.ok) throw new Error("Failed to fetch industry distribution");
  return res.json();
};

export const fetchPipelineStats = async () => {
  const res = await fetch(`${API_BASE_URL}/pipeline`, { headers: getHeaders() });
  if (!res.ok) throw new Error("Failed to fetch pipeline stats");
  return res.json();
};

export const fetchRecentActivity = async () => {
  const res = await fetch(`${API_BASE_URL}/activity`, { headers: getHeaders() });
  if (!res.ok) throw new Error("Failed to fetch recent activity");
  return res.json();
};