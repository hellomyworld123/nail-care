const API = process.env.REACT_APP_API_URL;
if (!API) throw new Error('REACT_APP_API_URL manquant');
export const postReservation = payload =>
  fetch(`${API}/api/reservations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then(async res => {
    if (!res.ok) throw new Error(`API ${res.status}`);
    return res.json();
  }); 