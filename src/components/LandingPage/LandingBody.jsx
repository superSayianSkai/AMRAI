const Body = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center pt-[7rem] md:pt-[2rem] lg:mt-[10rem]">
      <h1 className="flex flex-col text-center md:block text-black  max-w-[70rem]">
        <span className=" text-[2.5rem] lg:mr-4 md:text-[5rem] font-medium">Introducing</span>
        <span className="text-[3rem] leading-[3rem] mb-6  md:text-[150px] font-bold">AMR</span>
      </h1>
      <p className="md:text-xl max-w-[40rem] text-gray-700 lg:my-[1rem] leading-[2rem] lg:leading-[2.6rem] whitespace-break-spaces">
        AMR is a powerful tool for inputting, analyzing, and visualizing genomic
        data. Our user-friendly platform helps you gain insights effortlessly.
      </p>
    </div>
  );
};

export default Body;
