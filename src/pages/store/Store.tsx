interface StoreCardProps {
  image: string;
  title: string;
  address: string;
  phone: string;
}

function StoreCard({ image, title, address, phone }: StoreCardProps) {
  return (
    <div className="flex mt-8 ml-10">
      {/* Card Left - Image or Branch */}
      <div className="w-[290px] h-[150px] bg-red-300 rounded-l-md flex items-center justify-center">
        {image.startsWith("http") ? (
          <img
            src={image}
            alt={title}
            className="w-[260px] h-[130px] object-cover rounded-md"
          />
        ) : (
          <span className="text-lg font-bold text-white">{image}</span>
        )}
      </div>

      {/* Card Right - Details */}
      <div className="w-[649px] h-[150px] bg-gray-200 rounded-r-md">
        <div className="flex flex-col mt-4 ml-4">
          {/* Title and Edit Button */}
          <div className="flex justify-between">
            <p className="text-xl font-bold">{title}</p>
            <button className="mr-14 w-[90px] h-[40px] rounded-md text-blue-500 bg-blue-50 border-2 border-blue-150">
              Edit
            </button>
          </div>
          {/* Address and Phone */}
          <div className="flex flex-col gap-2">
            <span className="text-gray-600">{address}</span>
            <span className="text-gray-600">{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Store() {
  const storedata = [
    {
      branch: "ABC Branch",
      title: "Lisy Store",
      address: "1A/Krihnarajapuram, 3 rd street sulur",
      phone: "044- 653578",
    },
    {
      branch: "BCD Branch",
      title: "LIly Store",
      address: "Kurunegala",
      phone: "044- 6565111",
    },
    {
      branch: "Brown Branch",
      title: "Sily Store",
      address: "colombo",
      phone: "044- 65343228",
    },
  ];
  return (
    <div className="z-10 flex justify-center mb-6 -mt-14 ml-14">
      {" "}
      <div className="w-[1096px] h-[705px] bg-red-400 rounded-md ">
        <div className="mt-6 space-x-[820px]">
          <span className="ml-5 text-[20px] ">Manage Store</span>
          <button className="rounded-md w-[99px] h-[40px] bg-blue-500 text-white">
            Add Store
          </button>
        </div>
        <div className="space-y-4">
          {storedata.map((items, index) => (
            <StoreCard
              key={index}
              image={items.branch}
              title={items.title}
              address={items.address}
              phone={items.phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
