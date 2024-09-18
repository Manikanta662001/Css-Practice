import React from "react";
import { ReactComponent as DownloadIcon } from "../assets/DownloadIcon.svg";
import Icon from "../assets/DownloadIcon.svg";

const CssTailwind = () => {
  return (
    <>
      <div className="text-center w-[100px] bg-sky-700 hover:w-auto hover:bg-sky-500">
        CssTailwind
      </div>
      <h1 className="min-w-[200px] max-w-[50%] bg-red-500 text-center h-[70px] hover:h-[100px]">
        Heading
      </h1>
      <h1>Min&Max Heights</h1>
      <p className="bg-cyan-300 min-h-[250px] max-h-[300px] overflow-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia
        ipsam vero. Nam, eos ipsam similique corrupti dicta explicabo dolor
        laborum, veniam nemo aliquid tenetur vero. Tempore rerum corporis dolor!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia
        ipsam vero. Nam, eos ipsam similique corrupti dicta explicabo dolor
        laborum, veniam nemo aliquid tenetur vero. Tempore rerum corporis
        dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        quia ipsam vero. Nam, eos ipsam similique corrupti dicta explicabo dolor
        laborum, veniam nemo aliquid tenetur vero. Tempore rerum corporis
        dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        quia ipsam vero. Nam, eos ipsam similique corrupti dicta explicabo dolor
        laborum, veniam nemo aliquid tenetur vero. Tempore rerum corporis
        dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        quia ipsam vero. Nam, eos ipsam similique corrupti dicta explicabo dolor
        laborum, veniam nemo aliquid tenetur vero. Tempore rerum corporis
        dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        quia ipsam vero. Nam, eos ipsam similique corrupti dicta explicabo dolor
        laborum, veniam nemo aliquid tenetur vero. Tempore rerum corporis
        dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        quia ipsam vero. Nam, eos ipsam similique corrupti dicta explicabo dolor
        laborum, veniam nemo aliquid tenetur vero. Tempore rerum corporis
        dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        quia ipsam vero. Nam, eos ipsam similique corrupti dicta explicabo dolor
        laborum, veniam nemo aliquid tenetur vero. Tempore rerum corporis
        dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        quia ipsam vero. Nam, eos ipsam similique corrupti dicta explicabo dolor
        laborum, veniam nemo aliquid tenetur vero. Tempore rerum corporis
        dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        quia ipsam vero. Nam, eos ipsam similique corrupti dicta explicabo dolor
        laborum, veniam nemo aliquid tenetur vero. Tempore rerum corporis
        dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        quia ipsam vero. Nam, eos ipsam similique corrupti dicta explicabo dolor
        laborum, veniam nemo aliquid tenetur vero. Tempore rerum corporis
        dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        quia ipsam vero. Nam, eos ipsam similique corrupti dicta explicabo dolor
        laborum, veniam nemo aliquid tenetur vero. Tempore rerum corporis
        dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        quia ipsam vero. Nam, eos ipsam similique corrupti dicta explicabo dolor
        laborum, veniam nemo aliquid tenetur vero. Tempore rerum corporis dolor!
      </p>
      <h2>
        Size className is used for setting the width and height of an element at
        the same time.
      </h2>
      <p className="bg-fuchsia-300 size-[200px] overflow-auto scrollbar-hide">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam
        perspiciatis accusantium, non nam dicta, in asperiores, libero ducimus
        numquam dolore quis. Rerum impedit perspiciatis, ipsa a alias cumque
        numquam dolore quis. Rerum impedit perspiciatis, ipsa a alias cumque
        numquam dolore quis. Rerum impedit perspiciatis, ipsa a alias cumque
        tempore!
      </p>
      <h3>Padding,Margin</h3>
      <div>all Sides same padding</div>
      <p className="bg-yellow-400 w-[300px] p-[20px] text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam
        perspiciatis accusantium, non nam dicta, in asperiores, libero ducimus
        numquam dolore quis. Rerum impedit perspiciatis, ipsa a alias cumque
        numquam dolore quis.
      </p>
      <div>left,right & top,bottom</div>
      <p className="bg-yellow-400 w-[300px] px-[30px] py-[50px] text-justify opacity-50 m-5px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam
        perspiciatis accusantium, non nam dicta, in asperiores, libero ducimus
        numquam dolore quis. Rerum impedit perspiciatis, ipsa a alias cumque
        numquam dolore quis.
      </p>
      {/* using created variables  */}
      <h1 className="font-mono text-[30px] italic font-bold bg-[var(--primary-color)]">
        Font size
      </h1>
      {/* using svg as image tag */}
      <img src={Icon} alt="img-unavailable" />
      {/* using svg as react component */}
      <DownloadIcon width={"100px"} height={"100px"} />
      {/* if we have images in public folder then we can directly access them */}
      <img src="/logo192.png" alt="" />
      <img src="/favicon.ico" alt="" />
    </>
  );
};

export default CssTailwind;
