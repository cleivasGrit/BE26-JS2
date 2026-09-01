const API_KEY = '';

export async function getAllCountries() {

    const response = await fetch(
        'https://api.restcountries.com/countries/v5?limit=100',
        { headers: { 'Authorization': `Bearer ${API_KEY}` } }
    );

    const data = await response.json();
    // console.log(data)
    // Returnera endast arrayen med alla lands-objekten
    return data.data.objects;
}