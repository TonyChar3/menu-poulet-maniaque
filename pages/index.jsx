import { useEffect } from "react";
import Heading from "./components/heading.component";
import Footer from "./components/footer.component";
import CategoryCard from "./components/category-card.component";
import LoadingSpinner from "./components/loading-spinner.component";
import { useMyContext } from "@/context/menuContext";
import { motion } from "framer-motion";

export default function Home() {
  const { state, dispatch } = useMyContext();

  useEffect(() => {
    if (state.menu_items.length > 0) {
      dispatch({ type: "DATA_LOADING", payload: { isLoading: false } });
    }
  }, [dispatch, state.menu_items]);

  return (
    <>
      <motion.main
        className="w-full h-full px-2 py-4 flex flex-col items-center overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <Heading />

        {state.data_loading ? (
          <LoadingSpinner />
        ) : Array.isArray(state.menu_items) && state.menu_items.length ? (
          state.menu_items.map((item, key) => (
            <CategoryCard
              key={key}
              category_name={item.category_name}
              category_id={item.category_id}
            />
          ))
        ) : (
          <>
            <div>
              <h2>Aucun article pour le moment...</h2>
            </div>
          </>
        )}
        <Footer />
      </motion.main>
    </>
  );
}
