export default function VideoPlaceholders() {
  const placeholders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <section className="flex flex-wrap justify-center sm:justify-around">
      {placeholders.map((item) => (
        <article className="w-full max-w-xs mb-6 sm:my-6" key={item}>
          <div className="w-full h-44 bg-gray-300 "></div>
          <div className="flex my-4">
            <div className="rounded-full h-8 w-8 bg-gray-300"></div>
            <div className="flex flex-col w-4/5 ml-4">
              <p className="w-full bg-gray-300  h-4"></p>
              <p className="w-1/2 bg-gray-300  h-4 mt-4"></p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
