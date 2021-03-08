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
