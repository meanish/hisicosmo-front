"use client"
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { OrderTabs } from "./orderTabs";

const Orders = ({ className, token }) => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!token) {
          throw new Error("Authorization token is missing.");
        }

        const response = await fetch("/api/myOrders", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setOrders(data?.data);
        console.log(data, "order -data");
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className={cn(`profile-form w-full bg-white p-5`, className)}>
        Loading orders...
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(`profile-form w-full bg-white p-5`, className)}>
        Error: {error}
      </div>
    );
  }

  return (
    <div className={cn(`profile-form w-full shadow-lg rounded-md bg-white min-h-[45vh] px-16 py-10`, className)}>
      {orders ? (
        <OrderTabs orders={orders} />
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Orders;
