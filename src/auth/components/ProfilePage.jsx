import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Divider,
  CircularProgress,
  Button,
} from "@mui/material";
import { Edit, Upload, Logout } from "@mui/icons-material";
import Navbar from "../../features/Shop/Layout/Navbar";

import { useThemeContext } from "../../context/ThemeContext";
import { getMyOrders } from "../../api/ordersApi";


export default function ProfilePage() {
  const { mode } = useThemeContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [editData, setEditData] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
  });
  const [orders, setOrders] = useState([]);
const [loadingOrders, setLoadingOrders] = useState(false);
 const API_BASE = import.meta.env.VITE_API_URL || "https://back-end-prod-meem-production.up.railway.app/api";
const BASE_URL = `${API_BASE}/users`

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch(`https://back-end-prod-meem-production.up.railway.app/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        

        const data = await res.json();
        setUser(data.data?.user || data.user || data);
        setEditData({
          name: data.data?.user?.name || "",
          email: data.data?.user?.email || "",
          password: "",
        });
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate, token]);

  const handleImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select an image first!");

    const formData = new FormData();
    formData.append("avatar", selectedFile);

    const res = await fetch(
      `${BASE_URL}/${user._id}/upload-avatar`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      }
    );

    const data = await res.json();
    if (res.ok) {
      alert("Profile picture updated!");
      setUser(data.data.user);
    } else {
      alert(data.message || "Upload failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async () => {
    if (!editData.name.trim() || !editData.email.trim()) {
      alert("Name and email are required");
      return;
    }

    if (editData.newPassword && !editData.oldPassword) {
      alert("You must enter your old password to change it");
      return;
    }

    try {
      const res = await fetch(
        `${BASE_URL}/update-profile`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(editData),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update");

      alert("Profile updated successfully");
      setUser(data.data.user);
      setIsEditing(false);
      setEditData((prev) => ({ ...prev, oldPassword: "", newPassword: "" }));
    } catch (err) {
      alert(err.message);
    }
  };
  const handleViewOrders = async () => {
  setLoadingOrders(true);
  try {
    const myOrders = await getMyOrders();
    setOrders(myOrders);
  } catch (err) {
    alert("Failed to load orders");
  } finally {
    setLoadingOrders(false);
  }
};


  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            width: "100%",
            maxWidth: 700,
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          }}
        >
          {/* Header / Cover */}
          <Box
            sx={{
              position: "relative",
              height: 160,
              background: "linear-gradient(135deg, #e8c303 0%, #fce918 100%)",
            }}
          >
            <Avatar
              sx={{
                width: 120,
                height: 120,
                position: "absolute",
                bottom: -60,
                left: "50%",
                transform: "translateX(-50%)",
                border: "4px solid white",
                fontSize: 48,
              }}
              src={
                user?.avatar
                  ? `https://back-end-prod-meem-production.up.railway.app/${user.avatar}`
                  : undefined
              }
            >
              {user?.name?.[0]?.toUpperCase() || "U"}
            </Avatar>
          </Box>

          <CardContent sx={{ mt: 8, textAlign: "center" }}>
            {isEditing ? (
              <Stack spacing={2} alignItems="center" sx={{ mt: 2 }}>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  style={{
                    padding: "8px",
                    width: "80%",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  style={{
                    padding: "8px",
                    width: "80%",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
                <input
                  type="password"
                  name="oldPassword"
                  value={editData.oldPassword}
                  onChange={handleChange}
                  placeholder="Enter your current password"
                  style={{
                    padding: "8px",
                    width: "80%",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
                <input
                  type="password"
                  name="newPassword"
                  value={editData.newPassword}
                  onChange={handleChange}
                  placeholder="New password (optional)"
                  style={{
                    padding: "8px",
                    width: "80%",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
              </Stack>
            ) : (
              <>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {user?.name}
                </Typography>
                <Typography color="text.secondary">{user?.email}</Typography>
              </>
            )}

            <Divider sx={{ my: 3 }} />

            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mt: 2, flexWrap: "wrap" }}
            >
              <input
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                id="avatar-upload"
                onChange={handleImageChange}
              />
              <label htmlFor="avatar-upload">
                <Button
                  sx={{
                    color: mode === "light" ? "primary.light" : "primary.main",
                  }}
                  variant="outlined"
                  component="span"
                  startIcon={<Upload />}
                >
                  Choose Picture
                </Button>
              </label>
              <Button
                variant="contained"
                startIcon={<Upload />}
                onClick={handleUpload}
              >
                Upload
              </Button>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ mt: 3 }}
              >
                {isEditing ? (
                  <>
                    <Button variant="contained" onClick={handleSaveChanges}>
                      Save Changes
                    </Button>
                    <Button variant="outlined" onClick={handleEditToggle}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    startIcon={<Edit />}
                    onClick={handleEditToggle}
                  >
                    Edit Profile
                  </Button>
                )}
              </Stack>
            </Stack>

            {/* Logout */}
            {/*  <Button
            variant="text"
            color="error"
            startIcon={<Logout />}
            onClick={handleLogout}
            sx={{ mt: 3 }}
          >
            Logout
          </Button> */}
          <Divider sx={{ my: 3 }} />

<Button
  variant="contained"
  color="secondary"
  onClick={handleViewOrders}
  disabled={loadingOrders}
>
  {loadingOrders ? "Loading Orders..." : "View My Orders"}
</Button>

{orders.length > 0 && (
  <Box sx={{ mt: 3, textAlign: "left" }}>
    <Typography variant="h6" sx={{ mb: 1 }}>
      My Orders
    </Typography>
    {orders.map((order) => (
      <Card
        key={order._id}
        sx={{
          p: 2,
          mb: 2,
          backgroundColor:
            mode === "light" ? "#fafafa" : "rgba(255,255,255,0.08)",
        }}
      >
        {/* <Typography>
          <strong>Order ID:</strong> {order._id}
        </Typography> */}
        <Typography>
          <strong>Total:</strong> ${order.totalPrice}
        </Typography>
        <Typography>
          <strong>Date:</strong>{" "}
          {new Date(order.createdAt).toLocaleString()}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          <strong>Items:</strong>
        </Typography>
        <ul>
          {order.items.map((item) => (
            <li key={item._id}>
              {item.product?.name || item.product} — you have: {item.quantity} of {item.product?.name} in the order
            </li>
          ))}
        </ul>
      </Card>
    ))}
  </Box>
)}

          </CardContent>
        </Card>
      </Box>
    </>
  );
}
