const FinalCTA = () => {
  return (
    <section className="enterprise-section relative">
      <div className="enterprise-shell">
        <div className="dark-card rounded-3xl p-8 sm:p-12 lg:p-16 text-center border border-gray-800 hover-lift transition-all duration-300">
          <div className="mx-auto max-w-3xl">
            <p className="section-kicker mb-4">Final Call To Action</p>
            <h2 className="section-title mb-6">
              Ready To Build Your <span className="text-blue-500">Brand?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 mb-8">
              Join hundreds of businesses that have transformed their digital presence with our innovative solutions. Let's create something remarkable together.
            </p>
            <button
              onClick={() => window.location.href = "/contact"}
              className="rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
