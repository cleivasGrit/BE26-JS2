// Promise med utbytbar typ, behövs för asyncfynktioner

type Product = {
    id: number,
    title: string,
    price: number
}

async function fetchProducts(): Promise<Product[]>{

    const response = await fetch('https://dummyjson.com/products?select=title,price');
    const data: {products: Product[]} = await response.json();
    console.log(data.products)

    // Detta var den tidigare versionen innan vi insåg att det steget behövs inte
    // Första funktionen är bara Så att ni kan logga för att förtydliga 
    // const products: Product[] = data.products.map( ({id, title, price})=>{ 
    //     console.log({id, title, price} )
    // })
    // 
    // const products: Product[] = data.products.map( ({id, title, price})=>({id, title, price}));
    // console.log(products);

    return data.products;
}

// TypeScript kan räkna ut att x innehåller Product[]
fetchProducts()
    .then( x => console.log(x) );

// Returneras inget är return type void
function log(){
    console.log('return type är void');
}