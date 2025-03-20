const HeroSection = () => (
    <section className="text-center py-16 bg-gray-100 font-omnesarabic ">
      <h1 className="text-4xl flex mx-auto text-center font-semibold mb-4 w-[75%]">Empower Your Career Journey, Unlock Opportunities, Achieve Success</h1>
      <div className="flex justify-center items-center mb-8">
        <input
          type="text"
          placeholder="Search Job Type or University by keyword or location"
          className="border border-gray-300 rounded-l py-2 px-4 w-1/2"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">Search</button>
      </div>
      <div className="flex justify-center">
        <img src="illustration.png" alt="Career Choice Illustration" className="w-1/2" />
      </div>
    </section>
  );
  
  export default HeroSection;