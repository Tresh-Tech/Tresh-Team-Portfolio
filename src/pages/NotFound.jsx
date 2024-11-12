import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="w-full h-screen flex items-center  justify-center flex-col gap-7">
        <h2 className="text-8xl">404 Not Found</h2>
        <Link to="/" className="bg-black text-white py-4 px-6 rounded-[20px]">
          Go To Home Page
        </Link>
      </div>
    </>
  );
}
