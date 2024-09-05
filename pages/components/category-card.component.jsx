import Link from "next/link";

const CategoryCard = ({ category_name, category }) => {
  return (
    <>
      <Link
        href={{
          pathname: "/menu",
          query: { id: category.category_id },
        }}
        className="w-[95%] md:w-[85%] lg:w-[50%] p-4 mb-6 bg-[#F89E33] flex flex-row justify-between items-center rounded-lg border border-[#7F7D7D] border-opacity-50 shadow shadow-[#7F7D7D] active:scale-[0.90] ease transition-all duration-300"
      >
        <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
          {category_name}
        </h3>
        <i className="bi bi-chevron-double-right text-2xl"></i>
      </Link>
    </>
  );
};

export default CategoryCard;
