import React, { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import "./ManageServices.css";

const ManageServices = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Electricity",
      status: "Active",
      image: "data:image/jpeg;base64,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", // you can set default Base64 if you want
    },
    {
      id: 2,
      name: "Water Supply",
      status: "Active",
      image: "data:image/jpeg;base64,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",
    },
  ]);

  const [newServiceName, setNewServiceName] = useState("");
  const [newServiceStatus, setNewServiceStatus] = useState("Active");
  const [newServiceImage, setNewServiceImage] = useState("");

  // ✅ Convert uploaded image to Base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewServiceImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Add New Service
  const handleAddService = (e) => {
    e.preventDefault();
    if (!newServiceName.trim()) return alert("Please enter a service name");
    if (!newServiceImage) return alert("Please upload an image");

    const newService = {
      id: services.length + 1,
      name: newServiceName,
      status: newServiceStatus,
      image: newServiceImage,
    };

    setServices([...services, newService]);
    setNewServiceName("");
    setNewServiceStatus("Active");
    setNewServiceImage("");
  };

  // ✅ Toggle Active / Inactive
  const toggleStatus = (id) => {
    setServices(
      services.map((service) =>
        service.id === id
          ? {
              ...service,
              status: service.status === "Active" ? "Inactive" : "Active",
            }
          : service
      )
    );
  };

  // ✅ Delete Service
  const handleDelete = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="manage-services-page">
      <AdminNavbar />

      <div className="services-container">
        <h1>Manage Services</h1>
        <p>Here you can add, update, and manage city services with images 📸</p>

        {/* Add Service Form */}
        <form className="add-service-form" onSubmit={handleAddService}>
          <input
            type="text"
            placeholder="Enter new service name"
            value={newServiceName}
            onChange={(e) => setNewServiceName(e.target.value)}
          />
          <select
            value={newServiceStatus}
            onChange={(e) => setNewServiceStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <button type="submit" className="add-btn">
            Add Service
          </button>
        </form>

        {/* Service Cards */}
        <div className="service-cards">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              {service.image && (
                <img
                  src={service.image}
                  alt={service.name}
                  className="service-icon"
                />
              )}
              <h3>{service.name}</h3>
              <span
                className={`status-badge ${
                  service.status === "Active" ? "active" : "inactive"
                }`}
              >
                {service.status}
              </span>

              <div className="card-buttons">
                <button
                  className="toggle-btn"
                  type="button"
                  onClick={() => toggleStatus(service.id)}
                >
                  Toggle
                </button>
                <button
                  className="delete-btn"
                  type="button"
                  onClick={() => handleDelete(service.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {services.length === 0 && (
            <p style={{ textAlign: "center", width: "100%" }}>
              No services available 🚧
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
