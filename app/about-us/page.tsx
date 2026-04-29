export default function AboutUs() {
    return (
        <main
            style={{
                margin: "0 auto",
                padding: "2rem 1rem",
                fontFamily: "Segoe UI, Arial, sans-serif",
                color: "#1f3c3b",
                maxWidth: "100%",
                overflowX: "hidden",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.5rem, 5vw, 2rem)" }}>
                    About Us
                </h1>

                <p style={{ wordWrap: "break-word" }}>
                    <strong>TSK Exports and Imports</strong> is a leading exporter of premium rice varieties, committed to quality and customer satisfaction.
                    Established in 2016 in Chennai, Tamil Nadu, India, as Thaswikha Exports and Imports, we focus on reaching international markets to meet global supply and demand.
                    We specialize in all varieties of Non-Basmati Rice that meet superior international standards. Our motto is “No Quality – No Business.”
                </p>
                <p style={{ marginBottom: "0.5rem" }}>
                    We mainly focus on the following Non-Basmati Rice varieties:
                </p>

                <ul style={{ paddingLeft: "1.2rem", marginBottom: "1.5rem" }}>
                    <li>Sona Masoori Raw / Steam Rice</li>
                    <li>Ponni Parboiled Rice</li>
                    <li>IR64 Long Grain Parboiled / Raw Rice</li>
                    <li>Swarna Parboiled Rice</li>
                    <li>Broken Rice</li>
                </ul>

                <p style={{ fontWeight: "600", marginBottom: "2rem" }}>
                    We are committed to satisfying customers and building lasting trust.
                </p>

                <section style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "1rem", color: "#1f3c3b", fontSize: "clamp(1.25rem, 4vw, 1.75rem)" }}>
                        Why Choose Us?
                    </h2>

                    <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.8" }}>
                        <li><strong>Best Service:</strong> We always strive to provide the best service.</li>
                        <li><strong>Timely Delivery:</strong> Ensuring delivery within agreed timelines.</li>
                        <li><strong>Experienced Team:</strong> Strong export expertise.</li>
                        <li><strong>Client-Centric:</strong> Flexible to customer needs.</li>
                        <li><strong>Quality & Cost:</strong> “No Quality, No Business”.</li>
                    </ul>

                    <p style={{ marginTop: "1rem" }}>
                        Our organization is a member of APEDA and the Spice Board of India.
                    </p>
                </section>

                <section>
                    <h2 style={{ marginBottom: "1.5rem", color: "#1f3c3b", fontSize: "clamp(1.25rem, 4vw, 1.75rem)" }}>
                        Our Registered Certificates
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "20px",
                        }}
                    >
                        {[
                            "IEC-1.png",
                            "BGST.png",
                            "FSSAI.png",
                            "GAPEDA.png",
                        ].map((img, i) => (
                            <div key={i} style={{ display: "flex", justifyContent: "center" }}>
                                <img
                                    src={`https://tskexportsandimports.com/web/wp-content/uploads/2022/07/${img}`}
                                    alt="certificate"
                                    style={{
                                        width: "100%",
                                        maxWidth: "250px",
                                        height: "auto",
                                        borderRadius: "8px",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}