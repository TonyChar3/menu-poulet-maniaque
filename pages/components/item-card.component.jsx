const ItemCard = ({
  name,
  extra = null,
  extra_2 = null,
  extra_3 = null,
  extra_4 = null,
  extra_5 = null,
  prix,
}) => {
  return (
    <>
      <div className="w-[95%] md:w-[80%] lg:w-[40%] md:mb-6 lg:mb-10 mb-4 p-3 lg:p-4 flex flex-row justify-between items-center border-2 border-[#F89E33] bg-[#656464] rounded-lg">
        {/* Names */}
        <div className="w-[80%] p-1">
          <p className="my-2 text-[#F89E33] font-bold text-xl md:text-2xl">
            {name}
          </p>
          {extra !== null ? (
            <p className="font-regular text-white text-lg md:text-xl">
              {extra.nom}
            </p>
          ) : null}
          {extra_2 !== null ? (
            <p className="font-regular text-white text-lg md:text-xl">
              {extra_2.nom}
            </p>
          ) : null}
          {extra_3 !== null ? (
            <p className="font-regular text-white text-lg md:text-xl">
              {extra_3.nom}
            </p>
          ) : null}
          {extra_4 !== null ? (
            <p className="font-regular text-white text-lg md:text-xl">
              {extra_4.nom}
            </p>
          ) : null}
          {extra_5 !== null ? (
            <p className="font-regular text-white text-lg md:text-xl">
              {extra_5.nom}
            </p>
          ) : null}
        </div>

        {/* Prices */}
        <div className="p-1">
          <p className="my-2 font-medium text-[#F89E33] text-xl md:text-2xl">
            {prix}
          </p>
          {extra !== null ? (
            <p className="font-regular text-white text-lg md:text-xl">
              {extra.prix}
            </p>
          ) : null}
          {extra_2 !== null ? (
            <p className="font-regular text-white text-lg md:text-xl">
              {extra_2.prix}
            </p>
          ) : null}
          {extra_3 !== null ? (
            <p className="font-regular text-white text-lg md:text-xl">
              {extra_3.prix}
            </p>
          ) : null}
          {extra_4 !== null ? (
            <p className="font-regular text-white text-lg md:text-xl">
              {extra_4.prix}
            </p>
          ) : null}
          {extra_5 !== null ? (
            <p className="font-regular text-white text-lg md:text-xl">
              {extra_5.prix}
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ItemCard;
