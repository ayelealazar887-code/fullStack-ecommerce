import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const verify = async () => {
      try {
        const reference =
          searchParams.get("reference");

        if (!reference) {
          setLoading(false);
          return;
        }

        const { data } = await API.get(
          `/payment/verify/${reference}`
        );

        if (data.success) {
          setSuccess(true);
        }
      } catch (error) {
        console.log(
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Verifying payment...</p>
      </div>
    );
  }

  if (!success) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Payment Failed
          </h1>

          <button
            onClick={() =>
              navigate("/dashboard/cart")
            }
            className="mt-5 bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            Back to Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700">
          Payment Successful 🎉
        </h1>

        <p className="mt-3 text-gray-600">
          Thank you for your order.
        </p>

        <button
          onClick={() =>
            navigate("/dashboard")
          }
          className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;