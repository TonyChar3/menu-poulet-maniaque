import Link from "next/link";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <div className="text-center flex flex-col jusitfy-center items-center">
          <Image
            src="https://ik.imagekit.io/bqofr3ncj/Projects/POLUETMANIQUEPNG.png?updatedAt=1725557649846"
            alt="logo poulet maniaque"
            className="my-4"
            width={"100"}
            height={"100"}
          />
          <h2 className="text-3xl text-[#F89E33] font-bold">ERREUR 404</h2>
          <Link
            href="/#welcome"
            className="bg-[#F89E33] text-black p-3 my-6 rounded-xl text-xl active:scale-[0.90] transform-all ease duration-300"
          >
            Retour
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
