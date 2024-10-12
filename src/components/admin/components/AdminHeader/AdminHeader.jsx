import notification from "../../../../assets/images/admin/notification.svg";
import search from "../../../../assets/images/admin/Frame (1).svg";
import "./AdminHeader.css";
const AdminHeader = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="search">
        <img src={search} alt="search" />
        <input type="text" />
      </div>
      <div className="flex items-center">
        <button className="btn-notification">
          <img src={notification} alt="notification" />
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
