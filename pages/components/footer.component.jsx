import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full p-2 my-4 flex flex-col justify-center items-center">
        <p>&copy; 2024 Poulet maniaque.</p>
        <div className="flex flex-row justify-center items-center">
          <p>design & made by </p>
          <Link
            href="https://portfolio.tony-char3.com/"
            target="_blank"
            className="mx-1 underline text-[#F89E33]"
          >
            Anthony Charette
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
