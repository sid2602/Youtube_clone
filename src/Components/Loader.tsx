import Loader from "react-loader-spinner";

export default function Loading() {
  return (
    <Loader
      type="Oval"
      color="#cc181e"
      height={50}
      width={50}
      timeout={3000}
    ></Loader>
  );
}

export const MainLoader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <Loading />
      <h2 className="p-2">Loading</h2>
    </div>
  );
};
