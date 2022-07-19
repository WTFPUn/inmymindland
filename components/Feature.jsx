import Image from "next/image";

const Feature = ({ image, title, detail, subtitle }) => {
  let i = 0;
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={image}
        width={200}
        height={200}
        layout="fixed"
        alt="mac"
      />
      <div className="text-[#707070] text-xl mt-2 h-3">{subtitle}</div>
      <div className="text-2xl mt-8 mb-4">{title}</div>
      {detail.map(e => {
        return <p key={title+i++} className="font-light text-xl">{e}</p>
      })}
    </div>
  );
};

export default Feature;
