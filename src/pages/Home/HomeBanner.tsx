const HomeBanner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-6 px-3">
      <div className="w-full">
        <div className="relative top-1/2 text-end mr-4">
          <h3 className="font-semibold text-3xl text-slate-950">
            Sale Furniture
            <br />
            For Summer
          </h3>
          <p className="text-white">Great Discounts here</p>
        </div>
        <img
          className="w-full h-full lg:h-96"
          src="https://media.istockphoto.com/id/968086564/photo/wooden-chairs-at-table-in-bright-open-space-interior-with-lamp-next-to-grey-couch-real-photo.jpg?s=612x612&w=0&k=20&c=TfE8sZbX_XC4yIYEaRAJHrdIWjZqvRx3Crn0ygcr-h0="
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="relative top-1/2 ml-4">
          <h3 className="font-semibold text-3xl text-slate-950">
            Office chair
            <br />
            For best offer
          </h3>
          <p className="text-white">Great Discounts here</p>
        </div>
        <img
          className="w-full h-full lg:h-96"
          src="https://www.sircapaints.com/wp-content/uploads/2020/08/sirca_about-us.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeBanner;
