import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";
import { useAppDispatch } from "../../app/store/configureStore";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { setBasket } from "../basket/basketSlice";
import LoadingComponent from "../../app/layout/LoadingComponent";

const stripePromise = loadStripe(
  "pk_test_51LAySXB9m9D6BPaDYWv3Enif8InS23MYpy1flfzcwZi8sJilQDoGnyNbk68qEJHBEjAKbtkrht1Lh9OcfXCxiaJl00SR0rrPmM"
);

export default function CheckoutWrapper() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const basket = await agent.Payments.createPaymentIntent();
        dispatch(setBasket(basket));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, [dispatch]);

  if (loading) return <LoadingComponent message="Loading checkout..." />;

  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}
