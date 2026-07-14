import "./Dashboard.css";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$10.540",
      trend: "22.45%",
      isUp: true,
      iconType: "dollar",
    },
    {
      title: "Orders",
      value: "1,056",
      trend: "15.34%",
      isUp: true,
      iconType: "cart",
    },
    {
      title: "Active Sessions",
      value: "48",
      trend: "18.25%",
      isUp: false,
      iconType: "user",
    },
    {
      title: "Total Sessions",
      value: "5.420",
      trend: "10.24%",
      isUp: false,
      iconType: "users",
    },
  ];

  const renderIcon = (type) => {
    switch (type) {
      case "dollar":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5d87ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        );
      case "cart":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5d87ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        );
      case "user":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5d87ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        );
      case "users":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5d87ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-view">
      <h1 className="dashboard-title">Dashboard</h1>
      
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-card-left">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-title">{stat.title}</div>
              
              <div className={`stat-trend ${stat.isUp ? "trend-up" : "trend-down"}`}>
                <span className="trend-percentage">{stat.trend}</span>
                {stat.isUp ? (
                  <svg className="trend-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                ) : (
                  <svg className="trend-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                )}
              </div>
            </div>
            
            <div className="stat-card-right">
              <div className="stat-icon-wrapper">
                {renderIcon(stat.iconType)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
