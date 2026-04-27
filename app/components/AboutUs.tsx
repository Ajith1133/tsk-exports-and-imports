import { useRouter } from "next/navigation";
import { useGetBreakpoints } from "../hooks/useGetBreakpoints";


export default function AboutUs() {
    const router = useRouter();
    const { isMobile } = useGetBreakpoints();
    return (
        <section
            style={{
                position: "relative",
                paddingTop: "6rem",
                paddingBottom: "4rem",
                background: "#CDEF7F",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "-1px",
                    left: 0,
                    width: "100%",
                    overflow: "hidden",
                    lineHeight: 0,
                }}
            >
                <svg
                    viewBox="0 0 1440 175"
                    style={{ display: "block", width: "100%", height: "100px" }}
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C480,150 960,150 1440,0 L1440,0 L0,0 Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "stretch",
                    justifyContent: "space-between",
                    minHeight: "500px",
                    gap: "2rem",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: ".5rem",
                        padding: isMobile ? "0" : "2rem",
                        alignItems: "center",
                    }}
                >
                    <h2
                        style={{
                            fontSize: isMobile ? "2.5rem" : "3.5rem",
                            marginBottom: "1rem",
                            color: "#161306",
                            letterSpacing: "1px",
                            fontWeight: "400",
                        }}
                    >
                        About Us
                    </h2>
                    <p
                        style={{
                            fontSize: isMobile ? "1rem" : "1.125rem",
                            color: "#070b12",
                            marginBottom: "1rem",
                            width: "70%",
                        }}
                    >
                        "Thaswikha Exports and Imports" was established in the year 2016 in Chennai, Tamilnadu,
                        India and with primary focus of reaching the international market to meet the supply
                        and demand. We are a leading exporter of all varieties of Non-Basmati Rice with superior
                        quality of international standards. We believe in Quality of product is the primary
                        aspect of any business especially in exports and Imports. We trust on
                        "No Quality – No Business".
                    </p>

                    <p
                        style={{
                            fontSize: isMobile ? "1rem" : "1.125rem",
                            color: "#070b12",
                            marginBottom: "1rem",
                            width: "70%",
                        }}
                    >
                        India is the world's largest producer of Rice. It contributes 21.5 percent of global
                        rice production. Within the country, rice occupies one-quarter of the total cropped
                        area and it contributes about 40 to 43 percent of total food grain production and
                        It continues to play vital role in the national exports.
                    </p>

                    <div>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                router.push('/about-us');
                            }}
                            style={{
                                display: "inline-block",
                                backgroundColor: "#F4CB4D",
                                color: "#1f3c3b",
                                padding: "12px 30px",
                                fontSize: "1rem",
                                fontWeight: "700",
                                textDecoration: "none",
                                transition: "all 0.3s ease",
                                cursor: "pointer",
                                border: "none",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#f6c423"
                                e.currentTarget.style.borderColor = "#F4CB4D"
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#F4CB4D";
                                e.currentTarget.style.borderColor = "#7c6b3a";
                            }}
                        >
                            READ MORE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}