
import Link from "next/link";
import { riceProducts } from "./productsData";
import { Row, Col } from "antd";


export default function Products() {
  return (
    <main className="container" style={{ padding: '2rem' }}>
      <div>
        <h1 style={{ color: "#7393B3" }} >Our Rice Products</h1>
        <h4>Click on any of the below product to view more details and send an enquiry. You can also email us on enquiry@tskexportsandimports.com to get more details.</h4>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
        {riceProducts.map((rice) => {
          return (
            <div key={rice.name} style={{ flex: '1 1 240px', background: '#eaf1f8', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={rice.img} alt={rice.name} style={{ width: 180, height: 120, objectFit: 'cover', borderRadius: 8, marginBottom: 16 }} />
              <h3 style={{ marginBottom: '0.5rem', textAlign: 'center' }}>{rice.name}</h3>
              <p style={{
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                minHeight: '5.5em',
                marginBottom: 8,
                fontSize: '1rem',
                textAlign: 'center',
              }}>{rice.desc}</p>
              <Link href={`/products/${encodeURIComponent(rice.name)}`} style={{ color: '#7393B3', fontWeight: 500, marginTop: 4, fontSize: '0.98rem' }}>
                Read More
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}