import './Showcase.css'

export function Showcase() {

  return (
    <section className="showcase">
      <div className="showcase__container">
        <div className="showcase__image-left">
          <img src="/src/assets/beneath_hero1.webp" alt="Neat Labs Preview 1" />
        </div>
        <div className="showcase__image-right">
          <img src="/src/assets/beneath_hero2.webp" alt="Neat Labs Preview 2" />
          <div className="showcase__card">
            <div className="showcase__stats">
              <div className="stat-card left-card">
                <div className="stat-label">users</div>
                <div className="stat-number">1765</div>
                <div className="stat-pill">
                  <span className="stat-icon">↗</span>
                  <span className="stat-percent">4%</span>
                </div>
              </div>
              <div className="stat-card right-card">
                <div className="stat-label">new users</div>
                <div className="stat-number">437</div>
                
                <div className="stat-pill">
                  <span className="stat-icon">↗</span>
                  <span className="stat-percent">9%</span>
                </div>
              </div>
            </div>
            <div className="showcase__chart">
              <svg className="area-chart" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#d6fd6f" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#d6fd6f" stopOpacity="0.1"/>
                  </linearGradient>
                  <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="2,2"/>
                  </pattern>
                </defs>
                
                {/* Y-axis labels */}
                <text x="35" y="35" textAnchor="end" fontSize="10" fill="#666">50k</text>
                <text x="35" y="65" textAnchor="end" fontSize="10" fill="#666">40k</text>
                <text x="35" y="95" textAnchor="end" fontSize="10" fill="#666">30k</text>
                <text x="35" y="125" textAnchor="end" fontSize="10" fill="#666">20k</text>
                
                {/* Grid lines */}
                <rect width="400" height="150" fill="url(#grid)"/>
                
                {/* Area fill */}
                <path 
                  d="M 40 120 L 80 100 L 120 85 L 160 95 L 200 70 L 240 55 L 280 65 L 320 45 L 360 30 L 360 150 L 40 150 Z" 
                  fill="url(#areaGradient)"
                />
                
                {/* Main line */}
                <path 
                  className="chart-line"
                  d="M 40 120 L 80 100 L 120 85 L 160 95 L 200 70 L 240 55 L 280 65 L 320 45 L 360 30" 
                  fill="none" 
                  stroke="#a3f263" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Data points */}
                <circle className="chart-point" cx="40" cy="120" r="4" fill="#22c55e"/>
                <circle className="chart-point" cx="80" cy="100" r="4" fill="#22c55e"/>
                <circle className="chart-point" cx="120" cy="85" r="4" fill="#22c55e"/>
                <circle className="chart-point" cx="160" cy="95" r="4" fill="#22c55e"/>
                <circle className="chart-point" cx="200" cy="70" r="4" fill="#22c55e"/>
                <circle className="chart-point" cx="240" cy="55" r="4" fill="#22c55e"/>
                <circle className="chart-point" cx="280" cy="65" r="4" fill="#22c55e"/>
                <circle className="chart-point" cx="320" cy="45" r="4" fill="#22c55e"/>
                <circle className="chart-point" cx="360" cy="30" r="4" fill="#22c55e"/>
              </svg>
              <div className="chart-label">Revenue Trend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}