import logo from "../../../assets/images/admin/restaurant.jpg";
import "./Partners.css";

const Partners = () => {
  const data = [
    {
      id: "#32000200",
      customer: "Priscilla Warren",
      count: 10,
      date: "Yan 10, 2024",
      status: "Aktiv",
      image: logo,
    },
    {
      id: "#32000205",
      customer: "Priscilla Lorem",
      count: 12,
      date: "Yan 10, 2024",
      status: "Aktiv",
      image: logo,
    },
  ];

  return (
    <table className="partners-table">
      <thead>
        <tr>
          <th>Sıra</th>
          <th>Müştəri</th>
          <th>Məhsul sayı</th>
          <th>Tarix</th>
          <th>Status</th>
          <th>Düzəliş</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.id}</td>
            <td>
              <div className="customer-info">
                <img src={row.image} alt="logo" className="customer-logo" />
                {row.customer}
              </div>
            </td>
            <td>{row.count}</td>
            <td>{row.date}</td>
            <td className="status">{row.status}</td>
            <td>
              <i className="icon edit-icon"></i>
              <i className="icon delete-icon"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Partners;
