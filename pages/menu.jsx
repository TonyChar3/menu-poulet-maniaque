import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMyContext } from "@/context/menuContext";
import LoadingSpinner from "./components/loading-spinner.component";
import { motion } from "framer-motion";
import Link from "next/link";
import ItemCard from "./components/item-card.component";

const Menu = () => {
  const { state, dispatch } = useMyContext();
  const router = useRouter();
  const data = router.query;
  const [item, setCurrentItem] = useState(null);

  useEffect(() => {
    state.menu_items.forEach((el) => {
      if (el.category_id === parseInt(data.id)) {
        setCurrentItem(el);
      }
    });
  }, [data, state]);
  return (
    <>
      <Link
        href="/"
        className="my-4 lg:p-2 flex flex-row text-[#F89E33] text-2xl"
      >
        <i className="bi bi-chevron-double-left mx-2"></i>
        <p>Retour</p>
      </Link>
      <motion.div
        className="my-4 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <div className="w-[95%] md:w-[85%] lg:w-[50%] p-4 lg:p-6 mb-6 bg-[#F89E33] flex flex-row justify-between items-center rounded-lg border border-[#7F7D7D] border-opacity-50 shadow shadow-[#7F7D7D]">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
            {item !== null ? item.category_name : ""}
          </h3>
        </div>
        {item !== null ? (
          item.items.map((element, key) => (
            <ItemCard
              key={key}
              name={element.name}
              extra={element.extra}
              extra_2={element.extra_2}
              extra_3={element.extra_3}
              extra_4={element.extra_4}
              extra_5={element.extra_5}
              prix={element.prix}
            />
          ))
        ) : (
          <LoadingSpinner />
        )}
      </motion.div>
    </>
  );
};

export default Menu;
