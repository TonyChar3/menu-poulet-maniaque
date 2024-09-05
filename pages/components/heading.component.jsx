import Image from "next/image";
import Link from "next/link";

const Heading = () => {
  return (
    <>
      <div
        className={`w-full lg:p-3 flex flex-col justify-start items-center bg-[#333333]`}
      >
        <div className="w-full flex flex-col justify-between items-center">
          {/* Facebook + telephone container */}
          <div
            className={`w-full p-2 flex flex-row justify-around items-center font-sans text-[#F89E33]`}
          >
            {/* Facebook link */}
            <div className="p-2 flex flex-row justify-center items-center">
              <Link href="https://www.facebook.com/p/Poulet-Maniaque-March%C3%A9-Cantley-100070033620865/">
                <i className="bi bi-facebook text-2xl mx-2 md:mx-3"></i>
                <span className="font-regular text-lg md:text-xl">
                  facebook
                </span>
              </Link>
            </div>

            {/* Telephone */}
            <div className="p-2 flex flex-row justify-center items-center">
              <i className="bi bi-telephone-fill text-xl mx-2 md:mx-3"></i>
              <span className="font-regular text-lg md:text-xl">
                (819) 607-0578
              </span>
            </div>
          </div>

          {/* Logo container */}
          <div
            className={`w-full p-2 md:p-4 flex flex-row justify-center items-center`}
          >
            <Image
              src="https://ik.imagekit.io/bqofr3ncj/Projects/POLUETMANIQUEPNG.png?updatedAt=1725557649846"
              alt="logo poulet maniaque"
              className="transition-all ease duration-300"
              width={"100"}
              height={"100"}
            />
          </div>
        </div>
        {/* Divider */}
        <div className="w-80 md:w-[80%] h-1 mx-auto my-2 bg-[#F89E33] rounded-lg"></div>
      </div>
    </>
  );
};

export default Heading;
