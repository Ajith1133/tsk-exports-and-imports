export default function Certificates() {
    return (

        <section
            style={{
                padding: "4rem 1rem",
                background: "#f8fafc",
            }}
        >
            <div
                style={{
                    maxWidth: "80rem",
                    margin: "0 auto",
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "2rem",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "3rem",
                            marginBottom: "0.5rem",
                            color: "#1E2D3B",
                        }}
                    >
                        Certifications & Memberships
                    </h2>

                    <span
                        style={{
                            color: "#6b7280",
                            fontSize: "1rem",
                        }}
                    >
                        FASSAI, ISO (3), MSME, APEDA
                    </span>
                </div>

                <div
                    style={{
                        background: "#fff",
                        padding: "50px",
                        borderRadius: "10px",
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "32px",
                        alignItems: "center",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                    }}
                >
                    <img src="/fssai.png" alt="FASSAI" style={{ width: "100%", height: "100px", objectFit: "contain" }} />
                    <img src="/iso.svg" alt="ISO" style={{ width: "100%", height: "100px", objectFit: "contain" }} />
                    <img src="/msme.svg" alt="MSME" style={{ width: "100%", height: "200px", objectFit: "contain" }} />
                    <img src="/apeda.svg" alt="APEDA" style={{ width: "100%", height: "100px", objectFit: "contain" }} />
                </div>
            </div>
        </section>
    )
}