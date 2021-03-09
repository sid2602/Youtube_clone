export default function Error() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
      <img src={process.env.PUBLIC_URL + "/img/error.png"} />
      <h2 className="mt-2 text-sm sm:text-2xl text-center">
        Some error has occurred. Try again later
      </h2>
    </div>
  );
}
