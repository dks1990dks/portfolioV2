export async function getGeoMetadata(ipAddress) {
  // Ignore local development IPs
  if (!ipAddress || ipAddress === "127.0.0.1" || ipAddress === "::1") {
    return { country: "Localhost", city: "Localhost" };
  }

  try {
    const cleanIp = ipAddress.split(",")[0].trim(); // Handle proxy/load balancer IPs
    const response = await fetch(`https://ipapi.co/${cleanIp}/json/`);
    
    if (!response.ok) return { country: "Unknown", city: "Unknown" };

    const data = await response.json();
    return {
      country: data.country_name || "Unknown",
      city: data.city || "Unknown",
    };
  } catch (error) {
    console.error("GeoIP Lookup Failed:", error.message);
    return { country: "Unknown", city: "Unknown" };
  }
}