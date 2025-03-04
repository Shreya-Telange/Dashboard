import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import styles from "@/styles/Dashboard.module.css";

const data = [
  { month: "Jan", marketingSales: 10, onlineSales: 5 },
  { month: "Feb", marketingSales: 20, onlineSales: 10 },
  { month: "Mar", marketingSales: 15, onlineSales: 12 },
  { month: "Apr", marketingSales: 12, onlineSales: 18 },
  { month: "May", marketingSales: 18, onlineSales: 16 },
  { month: "Jun", marketingSales: 25, onlineSales: 10 },
  { month: "Jul", marketingSales: 22, onlineSales: 12 },
  { month: "Aug", marketingSales: 18, onlineSales: 15 },
  { month: "Sep", marketingSales: 16, onlineSales: 20 },
  { month: "Oct", marketingSales: 20, onlineSales: 22 },
  { month: "Nov", marketingSales: 24, onlineSales: 18 },
  { month: "Dec", marketingSales: 26, onlineSales: 14 },
];

const recentSales = [
  { name: "Henry Rashford", amount: "$359.00", time: "5 minutes ago", avatar: "/Henry.jpg" },
  { name: "Jack Chidwell", amount: "$230.00", time: "10 minutes ago", avatar: "/Jack.jpg" },
  { name: "Marie Jones", amount: "$180.00", time: "30 minutes ago", avatar: "/Marie.jpg" },
 
];

const latestInvoices = [
  { id: "#214314", name: "Jonathan Downing", date: "11/10/2020", amount: "$132.00", email: "email1234@domain.com", productId: "003145", status: "Paid" },
  { id: "#215613", name: "Markus Rashford", date: "11/10/2020", amount: "$99.00", email: "email1234@domain.com", productId: "003145", status: "Paid" },
  { id: "#214314", name: "Ian Grealis", date: "11/10/2020", amount: "$249.00", email: "email1234@domain.com", productId: "004100", status: "Pending" },
];

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      {/* MAIN CONTENT */}
      <div className={styles.mainContent}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>Dashboard Overview</h2>
          <p className={styles.date}>12:15 PM at 19th November 2020</p>
          <div className={styles.headerRight}>
            <input type="text" placeholder="Search..." className={styles.searchBar} />
            <button className={styles.yearButton}>
              This Year <IoIosArrowDown className={styles.dropdownIcon} />
            </button>
            <FaBell className={styles.icon} />
            <Image src="/Flag.png" alt="India Flag" width={24} height={18} className={styles.flagIcon} />
            <FaUserCircle className={styles.profilePic} />
          </div>
        </div>

{/* METRICS CARDS */}
<div className={styles.metricsContainer}>

{/* TOTAL SALES */}
<div className={styles.metricCard}>
  <div className={styles.metricHeader}>
    <span className={styles.salesIcon}></span>
    <span className={styles.positiveChange}>+16.24%</span>
  </div>
  <h4>Total Sales</h4>
  <h2>$23,090.00</h2>
  <p>Compared to $19,340.00 last year</p>
</div>

{/* PURCHASES */}
<div className={styles.metricCard}>
  <div className={styles.metricHeader}>
    <span className={styles.purchasesIcon}></span>
    <span className={styles.negativeChange}>-10.82%</span>
  </div>
  <h4>Purchases</h4>
  <h2>$14,850.00</h2>
  <p>Compared to $17,980.00 last year</p>
</div>

{/* RETURNS */}
<div className={styles.metricCard}>
  <div className={styles.metricHeader}>
    <span className={styles.returnsIcon}></span>
    <span className={styles.positiveChange}>+23.3%</span>
  </div>
  <h4>Returns</h4>
  <h2>$6,525.00</h2>
  <p>Compared to $4,310.00 last year</p>
</div>

{/* BLUE MARKETING GOAL CARD */}
<div className={styles.marketingGoalCard}>
  <h4>Marketing goal for the past year</h4>
  <h2>$4,520.00</h2>

  {/* CIRCULAR PROGRESS BAR */}
  <div className={styles.progressContainer}>
    <CircularProgressbar
      value={68}
      text={"68%"}
      styles={buildStyles({
        pathColor: "#fff",
        trailColor: "rgba(255, 255, 255, 0.3)",
        textColor: "#fff",
        textSize: "16px",
      })}
    />
  </div>

  <p className={styles.goalText}>
    Goal: <span>$4,520.00 / $8,000.00</span>
  </p>
</div>

</div>
        {/* SALES ANALYTICS & RECENT SALES */}
        <div className={styles.analyticsContainer}>
          {/* Sales Chart */}
          <div className={styles.salesChart}>
            <div className={styles.chartHeader}>
              <h3>Sales Analytics</h3>
         {/* Legend: Exactly Beside "Sales Analytics" */}
         <div className={styles.legend}>
            <span className={styles.legendItem}>
              <span className={styles.blueDot}></span> Marketing Sales
            </span>
            <span className={styles.legendItem}>
              <span className={styles.purpleDot}></span> Online Sales
            </span>
          </div>

          {/* "This Year" Button on the Right */}
          <button className={styles.yearButton}>
            This Year <IoIosArrowDown className={styles.dropdownIcon} />
          </button>

        </div>

        {/* Sales Chart */}
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className={styles.tooltipBox}>
                      <p>{`9th ${payload[0].payload.month} 2020`}</p>
                      <h4>${payload[0].payload.marketingSales * 1000}.00</h4>
                      <span>Marketing Sales</span>
                      <p className={styles.tooltipChange}>+18.24%</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line type="monotone" dataKey="marketingSales" stroke="#007bff" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="onlineSales" stroke="#D583FF" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>

      </div>
          {/* Recent Sales */}
          <div className={styles.recentSales}>
            <div className={styles.salesHeader}>
              <h3>Recent Sales</h3>
              <HiDotsVertical className={styles.moreOptions} />
            </div>
            {recentSales.map((sale, index) => (
              <div key={index} className={styles.saleItem}>
                <Image src={sale.avatar} alt={sale.name} width={40} height={40} className={styles.saleAvatar} />
                <div>
                  <p className={styles.saleName}>{sale.name}</p>
                  <p className={styles.saleTime}>{sale.time}</p>
                </div>
                <p className={styles.saleAmount}>{sale.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LATEST INVOICES */}
        <div className={styles.invoicesContainer}>
          <div className={styles.invoicesHeader}>
            <h3>Latest Invoices</h3>
            <div className={styles.headerRight}>
              <button className={styles.reportButton}>📄 Generate Report</button>
              <HiDotsVertical className={styles.moreOptions} />
            </div>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Invoice No.</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Email</th>
                <th>Product ID</th>
                <th>Status</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {latestInvoices.map((invoice, index) => (
                <tr key={index}>
                  <td>{invoice.id}</td>
                  <td>{invoice.name}</td>
                  <td>{invoice.date}</td>
                  <td className={styles.invoiceAmount}>{invoice.amount}</td>
                  <td>{invoice.email}</td>
                  <td>{invoice.productId}</td>
                  <td>
                    <span className={`${styles.status} ${invoice.status === "Paid" ? styles.paid : styles.pending}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td>
                    <button className={styles.detailsBtn}>Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
