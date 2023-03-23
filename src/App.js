import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import StatusBarMessage from "./components/UI/StatusBarMessage";
import { mainActions } from "./store/main-slice";

let isInitialRunning = true;

function App() {
  const isCartVisible = useSelector((state) => state.main.isCartVisible);
  const cart = useSelector((state) => state.cart);
  const statusMessage = useSelector((state) => state.main.statusMessage);

  const dispatchFunction = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatchFunction(
        mainActions.showStatusMessage({
          status: "pending",
          title: "Отправка данных",
          message: "Данные корзины отправляются на сервер ...",
        })
      );

      const response = await fetch(
        "https://kitchen-japanese-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при отправке данных корзины");
      }

      dispatchFunction(
        mainActions.showStatusMessage({
          status: "success",
          title: "Отправка данных успешна",
          message: "Данные корзины успешно отправлены на сервер!",
        })
      );
    };

    if (isInitialRunning) {
      isInitialRunning = false;
      return;
    }

    sendCartData().catch((e) => {
      dispatchFunction(
        mainActions.showStatusMessage({
          status: "error",
          title: "Ошибка запроса",
          message: "Ошибка при отправке данных корзины",
        })
      );
    });
  }, [cart]);

  return (
    <>
      {statusMessage && (
        <StatusBarMessage
          status={statusMessage.status}
          title={statusMessage.title}
          message={statusMessage.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
