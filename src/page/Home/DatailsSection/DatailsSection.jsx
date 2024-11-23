import useCoupons from "../../../hooks/useCoupons";


const DatailsSection = () => {
  const [coupons] = useCoupons();

  return (
    <div>
      <div className="overflow-hidden ">
        <div className={`${coupons.length > 1 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  p-4 mx-auto' : 'w-1/2  '} mx-auto mt-2`}>
          {coupons.map((coupon) => (
            <div className="bg-orange-300 rounded-md shadow-md mb-4 " key={coupon._id}>
              <h3 className="text-md p-2 shadow-md md:text-2xl lg:text-4xl md:font-bold ">{coupon?.description}</h3>{" "}
              <h2 className="text-[#FFF] bg-gradient-to-tr bg-red-400 mt-4 text-center p-2 rounded-xl"><span className="text-green-600 md:font-bold">COUPON👉</span>  <span className="md:font-bold">{coupon?.coupon}</span></h2>
            </div>
          ))}
        </div>
      </div>
      <div>
        <iframe
          title="Simple Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29206.228933147286!2d90.36123454570769!3d23.790896517211625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a87b20518f%3A0x2c7316748ed9f99f!2z4Kai4Ka-4KaV4Ka-IOCmrOCmqOCmvuCmqOCngA!5e0!3m2!1sbn!2sbd!4v1700776193325!5m2!1sbn!2sbd"
          width=""
          className="w-full"
          height="600"
          style={{ border: "0" }}
          allowFullScreen="0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default DatailsSection;
