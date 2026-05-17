function Home() {
    return (
        <div style={{ 
            padding: '40px 20px', 
            maxWidth: '800px', 
            margin: '0 auto', 
            fontFamily: 'system-ui, sans-serif',
            color: '#f3f4f6'
        }}>
            {/* Main Header */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#fbbf24', marginBottom: '10px' }}>
                    🍹 Aaswitha's VaangaJuicePodalam Series 🍹
                </h1>
                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#9ca3af' }}>
                    "Exploring hard-working women who are desperately afraid of the dark... and random street dogs."
                </p>
            </div>

            {/* Quick Info Cards */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '20px', 
                marginBottom: '40px' 
            }}>
                <div style={{ backgroundColor: '#1f2937', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px solid #374151' }}>
                    <h3 style={{ margin: '0 0 5px 0', color: '#9ca3af' }}>📍 Where it's happening</h3>
                    <p style={{ margin: 0, fontSize: '1.3rem', fontWeight: 'bold' }}>Amaravathi</p>
                </div>
                <div style={{ backgroundColor: '#1f2937', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px solid #374151' }}>
                    <h3 style={{ margin: '0 0 5px 0', color: '#9ca3af' }}>💰 Entry Fee (1 Month)</h3>
                    <p style={{ margin: 0, fontSize: '1.3rem', fontWeight: 'bold', color: '#10b981' }}>₹1000</p>
                </div>
            </div>

            {/* Content Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                
                {/* Prerequisites Card */}
                <div style={{ backgroundColor: '#111827', padding: '25px', borderRadius: '12px', border: '1px solid #ef4444' }}>
                    <h2 style={{ color: '#ef4444', marginTop: 0, borderBottom: '1px solid #374151', paddingBottom: '10px' }}>
                        ⚠️ Mandatory Prerequisites
                    </h2>
                    <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li>Candidate must confidently know how to boil water without burning down the kitchen.</li>
                        <li>Only **Sweet Lime** shall be acquired (strictly matching user survival requirements).</li>
                        <li>Bring your own fancy glassware. If you present juice in a plastic mug, you will be publicly judged.</li>
                        <li style={{ color: '#fbbf24', fontWeight: 'bold' }}>
                            🔒 LEGALLY BINDING: A 5-star rating must be given in the feedback, or else.
                        </li>
                    </ul>
                </div>

                {/* Deliverables Card */}
                <div style={{ backgroundColor: '#111827', padding: '25px', borderRadius: '12px', border: '1px solid #3b82f6' }}>
                    <h2 style={{ color: '#3b82f6', marginTop: 0, borderBottom: '1px solid #374151', paddingBottom: '10px' }}>
                        🎓 What This Masterclass Actually Provides
                    </h2>
                    <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li>
                            <strong>Infinite Patience:</strong> Vital training to help you tolerate people while hand-squeezing citrus.
                        </li>
                        <li>
                            <strong>The Professional Fruit Squishing Method™:</strong> Channeling all your life's existential rage directly into the sweet lime for maximum flavor extraction.
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Home;
