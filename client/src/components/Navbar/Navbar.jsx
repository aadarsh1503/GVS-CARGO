import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { useState } from 'react';
import { FaChevronDown, FaTimes ,FaBars  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import i10 from "./i10.png"


const Navbar = () => {
  const items = [
    'Start',
    'BR Freight Shipping',
    'Freights',
    'Services',
    'Tools',
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Start');
    

  return (
    <div>
    <header className="bg-customGray  py-2">
      {/* Top Bar */}
      <div className="flex justify-between max-w-4xl mx-auto font-roboto items-center px-4 py-3 text-white text-sm">
  <span>Welcome to BR Freight Shipping</span>
  <div className="flex font-roboto space-x-2">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAAAyVBMVEXkEB7w5BLz1BPmDiHiDBru5hDlACDx4xTfABvnACTu6Q/gAB/eFRfpDSTjACHx4RXx2RnnbRri8AnpACrwADH43hvZABb14BjdIRblKyHkexbtayPjHh/oMiHpQiHjXBfmhhjqkxnmWiDnwxfldR3uzRbtnRvnUh/wtSDtpxvy8BLwxhzknx/qvhLvhR/kOB/nqhH0vh/u+Q3bPxj0CR/djhHzNC7UDxzXNAjRIhz5tDbiAC3k6QrizwTVahT8uSHd9gTkHg7xWDBnyPqdAAAHOElEQVR4nO2cC3eaSBTHwXkyjIxoBE0wiBUUjPWRbJPdmu52v/+H2kFtT+JmE8i2VfD+zknOiQJn5p879zWjhgEAAAAAAAAAwBmBjz2AkwKDHk/p9SXoYWCKtAq4SS+vgmOP5ehgPLiW1DEQDRvDAB17OMcG4+soGiFKrz+IMQI5kD1sxUk4mQozBGdqGLSXZlk8E0xNDIRBD3sUCyGI6buU47rqgQrOCyHkRIowpczZjWvQusohufX2VXrynNuJIqZiIiON+cfFzx/aUcBBnxe5jNKPLWJqCFHxfFhXOfhk+HZahTCibkNowzBFHLmjRWD/gqEdAZtHj31sNN+6zHFbIl6mLbZeLmybGrWVY9UeWcZbiZWzGA/dySJISBYF+eKqqSulD61s2Xlrdhg3+9qZYjp5zMZ1zkn5R+GzAX9jihg5O5OwItO1nF8ysqNgr0R3HdJiFyPDWqzCIoGootBebKp1+qbv2KFrNz4a1NRt5FBX+YSIwh0MjDB9EoZqlZwiifiUKOGvxxTjQgaic3r03ZSwcfsZYS9/SdagqkPS6sc6zfTbq2JiHOIloW3f2YaUHYQK+p8TBtNxS8thZt0Hy5Ll76e/mQ/cxjqBvx3Id9x/avBUi8EUyy57Vnljl9akrT5RrxPMZ95FDeSQM3OLiKnslNZD3t2LrNv7lGbr8OLrzxjfr8UJd0Wq1uPhwit9O/79zlcZEW0x8yxZoE9w2mAr3Ylhsix6x2KxLG+2YUx12egddx8T1MTYdjDedfX0L4x0LLiPfbYXJPYofoZEd696Aykpv/6jTZgQJP5csTCrZ2f0Al2nI9Rsbn+49IxJK9urIcQtbzbzt/Y4lrx/zfyx1RnNsqybmxaJbyu2UlAHjeNMqJamsWU2m01jwvbWwUTjANUav1qc9JLNWpD8dsY2jb6NqhRZsMTOIFGCaNdJRN4BJkJjfqfb1u99I38rDp3XEitkB8atG80EIzqvzRoP1bIPpHMu+7KlR79td+ay6H8r+y6H9ojftNDvCZIOdH712gMxopxzJ+u2VzfTR7K6LR+ojws26GK6tY9XIb4SasiL5dyetowFt/jXL2HF1NDlp+TG8FFbwmtqMCXEh0nHloUagHyWpbqGMz7f0Wqtlty89Yh5OFfb1fIfpkFMohKJOS1W09GV6HXyZ9sV7Z7SQeLv5v2SGooJNS4xMT69eU/td0JQy43z3bQXV4pg84lXwuypi3pVWyXPwQhf65DL2KF9MGUKP9HJlyzR/OC08sUKosHlB5NtDn0qMx/HvCMLNk73z8KlLj9JsMMnU3/DnstB2rMFLbqjXyuwpFfxwWLRydeNVdH48H9p0uTQnergG+tKt9px4l3YhhHMyWFwURv1nhZhDcD8Kv5Xcqqrusvqt8PfA+aJ2smRl/jke52/4nbJOIFRs/oGhYIV2VuHYlqMfQ7CVOljG9iowfpywlh8y0PNlqnMfZTJJmW3GZt4UfkFhp1I7R2GIEs3NcX+TxHZJbMq6yGqvhzBVGx9JxOt4YIOhj7ZrRcSO+XkQM7YdKoem+mokXc5ldrM8yOi1HEbGdv1x4KS/2tnup4UPpx6otCI6HrNFCy5lR7e5uzLNttmpl/KHe3hVGVLr1lp+6DBXOQd5Phj3+bIyHfv9YIhusgVYtkp+BDkUE6pHTLR5fTO4RU96qEnb4UN09czH2FqfHMVlhw32swnjwWtA90P0yRKkj+JINPlNJ2mZZfZaaDXhj1UIvOjxZMGoO1h63YuNsosGjetQaSyDTN98y+9ytazsJp1PsY6rhAxvwr4s1cNz1pEa8WKxk3EP7kz4efHIbSlJQtc0S4QtiYNMzncRqSWLvqDsb+eUkO+dQbZ2Ov3kOg0bkOI7wYFW80nB0I8jS/71ovD965jIgtn3Zje6+jk5/vdFRXDyOsVd4Toy30ehAdpaBVNI+TFLSMiE8rvVdKN5jRtO/jPA5A6AwmujaLn5rCdZpmIiLkeV1aOHwj24vbsKx11syWv+G7Lj8CZZDdeh170PmQeqn5D/X+CL5LLC53Ufv3cif7mZysHbu5nLmnug5BNsSPP9aPGEtfhQO0Pw+IvpyxnijWZHHsIRydPUywnb/PgYF7mwEM9QYZcLAKLI4snpOhno2qMrvv+XIZ9wxuSDOTQYdRxVTYbXj6KVsjRuYbVJ+DEzM8oi25oGeXOgNQSej3dnjplabjABc9Z1hhkjxvCZMQUbP6bdiPnjK2reZT4LN/O1ag0PPaIjotEzmUjP1+nSLwchv2z9h0IS/uqkZlKEDMObW7RM69b6GTamqfjVEfba3qWR6aeQUdDd0CdyZzMH2r63R2l4DalOhkbquWixt/QUByMkWPQ/ioZnH3OYWx37/LP/znuF/jKwSfI3rm70QP42fc7ngJfwAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwE/lH3L9dij0hwGiAAAAAElFTkSuQmCC" alt="Image 1" className="inline-block w-5 h-4 " />
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAABLFBMVEX///+/CzAAJ2i+ACrKUWG9ACPZjZb///28AC69CDHILEjejZr77vHBCi+8ABO9AB3FHj7yz9bjo6359fPPUWa3AAsAKmqZED7n5+cACl24w9KIF0HFCDAAAFgAIGUAJ2sAGWIAAFIAH2cAAF4AKWTp8O/FSlrPgIkAGl0AEWAAGWdEVYMAKGzd4OUAI2oADFoAEVmcb4S6yNdYa5CYprYAHltndp3N1uIAEmV+i6ZedpUpRHZJYIfu9v1TZJFugKIeOnC9xsuktcSNlrOcpb4rPXuqssg1TH8FMm+Mm63P1eI5UHmtuMHV2dytvddzfZh8lLqQRGB7hquwnrHeu8IfN3YuS3YuRXxIV42RpMUZN2bVlJ59jKCRnbGJj6u8utOKI00AAERnf6vl19pEmWB2AAALO0lEQVR4nO2ceXvbuBGHp9yDvdLdNi1r0guC4pGIkkhrJUvUGV2O5NhOsnWbOGljt81+/+9Q8JBMCYDxR9ePLQS/zSYKR+MneJ/BNRgQtHtU4/CHJ7/ae4FCJJJCJNQWog42uM21+SQ62P9SELkDLgc8HHFtfDf5EB2NuYHiLC5Cng2Nr+IvAxHuvICJy8OQBBXMMhiaXYe+80UgwlrPghlitzWe6jBi4/N7J5Bw3GRCZJtN88gMALB5FJpbLIzQDJuoDzBHxLbV23AndasQt3coDE2HGuslQuQOZpZ1MQMdyJ/WbFLqNxjPybN5oOvjiwtiHN52N8Ntp24XAJAQ04zubhIhws4CUul6+vvJ1gTlv4yy5+R/HYJzV7uNFez0My/I3JZ0R2wcfiOB8o6Gw/o4bSv5NW6bW82MffOY8MlsluP6WmnUxuEqyBARa5cxHrk/frv/er4erh3ndRYMkV+jWuq1sxiDG7Q7uWO3OctCL5r2aEKa2YL9V7BGhL1WFkURolfK8TD9qg5de9dmYM/KESHWuty08j641zooEGG/mrVGh1O6pb1X+ShlmbsWbDhB/oOmDEKSIbJJZ7LsJcCE7mjmmQ7t8zGMTX93+UjWjdDyrwEWzI4mESJsmBfQrbioDTM6VE4h8Ws18o1RZweRER7DBLneaPyatXqUCZGmVd9MHbJhr/lvOrsNdQcLD6fDztufqrtR1HwzTKOuRtylR2R08tUQpoZkMk718mdVeiS/w006RPciuREZZBLfBIax07+Ye/5cxOd2TJcbEVkVDvkkXnLSjASeO8VfCqL4lF4GrVVb1jmJRmwQtw0/uVbXlOxLnWfSzIOTkNPb3AHcrrPjv329/3rGRXTUggG9iszpDSEyOSl90rf6G7fG4VcSiIXIJnJN0C0v/YQpGzoGWNXST5TJroF+tnGTKF+0JSOuE52nGaQV+TAalrf30xfk0SoCmK/OP9RflP3waETcLonbeeq2iuVFpLlvs2EqTxFBtDWxTa3ySLZwy27tLbf3tsSINMeIYJ1Fu/ZwGRH2+pCnBHQ9WJUz2Ybmakn2PDXPvbSnyYtIi9Fxvp4JRtTEH14FOSMyUu3avFd5dI3b+aZWYkTYR1HW1leMpZHTzhNLHjXrE7ezzO3Y02RHZOR5RoDXDEThPI+wtksh0rTcLZIfEe5cgh5dk8ZSObT0fJqECRl1lnQSze2CPr4mEVbMgo3DJ09+s/diLx29Fiwr5lUEXSpU7CsYjzy00AO0u8D2PQveNM1pBJf5kRo+/IMEYkeRNu4i0n5vblHFDs7HmeYaWvN8TCXRsB2lbrZ50so7aO3vf9x//YOJyH85zDcRR3XKZtfDNHgMx1/tdkL/3fucaFi4SbGNZe/0DS3Om2+4jCOjRh4yON5FZKwzSX7hJnEy5I5itRREFkWaYex+C++m3iREtHvAUdadhXwcg3yInE8uj0J8zi/yc/o8k2yIsNGEU148OCf0+Vom0uHQeMVhJBui2O5yK/IwSvQKBxHZ4V9z3CRDRDZYLWCeqRLZq3TDwRzE/d7FZsMhMSJc9ZCHnECHU+R5nrsVQD2EvMqC7OwrxGSWKrB8bKdulTHoV6kbXcgnESJnEEREug4H5I+g3N2wNsueEVv6lWRaykG6hRvo2Vfo7iYRIs18oWfJsKxBXbMcDrhnZem1rJAv8UuEsOZ8CNY2gEuPjiIZVtfrQyJHS4qUajStbjXV99HbPJeowzXC/hY+102KWsdg1aQX4lIV8uEY5Z3ibLukOFNvXaWGqD0HRlYWeVGTNanJVA6alsYkWTKRVciX1lmlmlClIb7mtbJeFpisYzWZUmoGaWzayUhjr+hlYO+YPB8DWNTcToKKTIMHxPU9a/UoEyIyGE0AFpU+lM5SNwojiIbVMwhq1Cl1ejJ0XRmQ31iFfDIhwr45G5+HWjiM6HR1PIWTpht7C2jbu4h6F8ELU6tNk4i1P5EJEdmtf3Rt7GO3+ZEaVNx2N+thZv0nakyuftTclKL5kVXIJxcibV3GyJiZOrUcm92h7p0ZVY3rJh2iO4SLcxDsc67m8SQ3IsPQYp9bi8Y4O9r42bfGtHjmoY94/n/dUchX58fMBx48Ddv12/UlPvzum+/2XnxEV7y7iumBLH0Uu9Y/E2/Dz/3xT/uvf/EQ4eoNTHndKQzmJruQz3DelhafUm1jaUQoYa0iM9kjCBxOIR9qwWLjJlMyZFuu4zihC3qCyIfa1s4CkycOmgOMzPQT5ebEhZtjS4wI2/2bfr8/10Hvf+r3r0flFNH5K2LqBwAzYvt00yjH1iR1WxImxKt/k45WsiLS3PcHoG8q8pZOeWKrLUrO43Ypwnw8jHK3jIqVjlXSItJsc1ncGNaB7D3KSTQjPC8u0erQyvYet4rNkzw3Sf6b5FsWaRFpsTfJzdGQGrFdOwFWFWQqbzDO3YryB4kR3RbyeYwEWzcv5KOzH8QtydzWhXwSIzLc89wcHdGrH7OoKx7QO1d8WvxUU3pEuEpG5VabTFyMy8ToKehdMt8xbtHULsmU/yIAfZUP8UdWfq6y1+IgQol+iRzcggmVb7VXkFyFXjd4WqGuqZkzWBy5NQtu8ggL/73/QcS7bPUuWTVJ+1GfUch3cowIt6qRrCi3RlJPe6Z32crd8H++l0Dssehdx815MHKJ02YWPHHliqpSe+dvuzUOf/jqyd6Ls0crWm8wSh3ivIYNN6g5P63uK76zQSRdSo2bKcP0Xwzaun60ruiTD9EdycS7bgzz87XyIXKOOaVUpOeM3ro8W3jCAygbIuzb3CQabi4TXiGfHwLvMrF0iJxLbkUePoqgyjalFz+WnBcaSoYI+14CzDNVLS98mNBVaFr2QhYLAk4hnzyI/LSQD1U6ZCk8RZ6HtuIFmxXkVU7IhuS/qa1k8XGHuKEK2dOuEPnEiMDDbx56UfMLKEWE3UG2UdCL16Jt1c36s+KiZ/aFciFfw20HZTf6ODu9SfSXfVdxkyi8itZthaBe26pE8z5tEmVk0Nm6++CcvoZ1JV8w6lEdMbSe7r/WezS7eVG8kc/auX2v+eZoXJQ6DnbHHNtcFpWOLaNKD1Wmxd8d7o3WiIxG5SLrbC3Gq2Rr1dSiQz2k9hyNynH2c5IKa/koVb7I0LwoS1eP6cnJsIuXFi4YAzLK6v8gCGV/xRNZAE7T16emoUIvA805+eIZCRWqbBhrp4Ub8yW9MiEinamf3q4fjeGaWchnxUdLYLyKptYFGKB6BMfSv5HP916f+Y7muha9erTfwwRh7LX1wW4hn2HOkilxC+cHsiMi89ZnlLY/Rp8ZhXxXWWQ5/md3B1Gj8zl7owFGXfnfyNdYD0GMHam9viFL2fyGy3eTDZGWJ8RY2zCj9AK5HTsuHnDu0kqCCN+jTDkOiYx7VE+OEqy/3qee/VkCwb3mER76TXG/iOChE1aPXwqRUAqRUAqRUAqRUAqRUAqRUAqRUPBrJYHgt0oCQfDQ28THrgAOHvqf8Nh1oBCJpBAJpRAJpRAJpRAJpRAJpRAJRRA99CHMY9eBWl2LFMDz3yndqefw0C9ze/xS+SKhFCKhFCKhFCKhFCKhFCKhFCKhFCKh4KHfd/f4BQ9d4PT4BT//XulO/azyRSKplJpQCpFQCpFQCpFQCpFQCpFQCpFQCpFQCpFQ6hxNqACefa10p56pnb5QKqUmlEIklEIklEIklEIklEIklEIklEIklFo6CqU2ICI9U9tYkdRlK6FUvkgohUgohUgohUgohUgohUgohUgohUgodUgkVADPv1W6U+qylVgqXySUQiSUQiSUQiSUQiSUQiSUQiSUQiSUQiSUQiTU/wDAjvBl9XGKSgAAAABJRU5ErkJggg==" alt="Image 2" className="inline-block w-5 h-4 " />
    <img src="data:image/png;base64,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" alt="Image 3" className="inline-block w-5 h-4 " />
    <img src="data:image/png;base64,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" alt="Image 4" className="inline-block w-5 h-4 " />
  </div>
</div>

      </header>

      {/* Main Navbar */}
      <div className="bg-white py-11">
  <div className="container mx-auto max-w-5xl flex flex-col lg:flex-row justify-between items-center">
    {/* Logo */}
    <div className="mb-6 lg:mb-0">
      <img src={i10} alt="BR Freight Shipping" className="h-20" />
    </div>

    {/* Contact Info */}
    <div className="flex flex-col font-roboto lg:flex-row max-w-5xl mx-auto items-center space-y-4 lg:space-y-0 lg:space-x-6 text-gray-700">
      <div className="flex items-center space-x-2">
        <MdLocationOn className="text-yellow-300 text-5xl" />
        <span className='text-sm text-left'>Av Monsenhor Antonio Benedito <br /> Spadadari 71 sala 02 Louveira -SP <br /> CEP : 13290-000</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaPhoneAlt className="text-white bg-yellow-300 rounded text-4xl p-2" />
        <span className='text-sm '>+55 (11) 4395-7585</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaWhatsapp className="text-white bg-yellow-300 text-4xl p-1" />
        <span className='text-sm '>+55 (11) 99317-3985</span>
      </div>
    </div>
  </div>
</div>


      {/* Navigation Menu */}
      <nav className="bg-YellowDark font-roboto py-7">
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
        {/* Desktop Navigation */}
        <ul className="hidden sm:flex space-x-6 bg-GrayDark py-2 px-14 rounded-full">
          {['Start', 'A BR Freight Shipping', 'Freights', 'Services', 'Ferramentas'].map((item) => (
            <li className="relative group font-bold" key={item}>
              {item === 'Start' ? (
                // Link only for 'Start' item
                <a href="/">
                  <button
                    className={`text-white py-3 lg:ml-0 flex items-center ${
                      selectedItem === item ? 'border-b-4 px-4 border-YellowDark' : ''
                    } hover:border-b-4 hover:border-YellowDark`}
                    onClick={() => setSelectedItem(item)}
                  >
                    {item}
                  </button>
                </a>
              ) : (
                // No link for other items
                <button
                  className={`text-white py-3 lg:ml-0 flex items-center ${
                    selectedItem === item ? 'border-b-4 px-4 border-YellowDark' : ''
                  } hover:border-b-4 hover:border-YellowDark`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                  <FaChevronDown className="ml-2" />
                </button>
              )}

        {/* Dropdown Options based on each item */}
        {item === 'A BR Freight Shipping' && (
          <div className="absolute hidden group-hover:flex flex-col z-10 bg-GrayDark  text-white  lg:w-[256px] -ml-2   rounded">
           <a href="/whoWeAre" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6 text-left">Who We Are</a>
<a href="/whereinBrazil" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6">Where We Operate in Brazil</a>
<a href="/operateWorld" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6">Where We Operate in the World</a>
<a href="/missionvisionandvalues" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6">Mission, Vision, and Values</a>

          </div>
        )}
        {item === 'Freights' && (
          <div className="absolute hidden group-hover:flex flex-col z-10 bg-GrayDark text-white  shadow-lg p-2  lg:w-[150px] -ml-2 rounded">
            <a href="/airFreight" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins">Air Freight</a>
            <a href="/seaFreight" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins">Sea Freight</a>
            <a href="/roadFreight" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins">Road Freight</a>
          </div>
        )}
        {item === 'Services' && (
          <div className="absolute hidden group-hover:flex flex-col bg-GrayDark z-10 text-white shadow-lg  lg:w-[325px] -ml-2 rounded">
            <a href="/stuffingUnloading" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Stuffing Unloading - BR Freight Stiffing</a>
            <a href="/lcl" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">LCL - Less Than Container Loaded</a>
            <a href="/fcl" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">FCL- Full Container Loaded</a>
            <a href="/customClearance" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Custom Clearance</a>
            <a href="/dgr" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">DGR-per-Dangerous perishable Products  </a>
            <a href="/inspection" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Inspection</a>
            <a href="/packaging" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Packaging</a>
            <a href="/storage" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Storage</a>
            <a href="/commercial" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Commercial and logical consultancy</a>
            <a href="/insurance" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">International Cargo Insurance</a>
          </div>
        )}
        {item === 'Ferramentas' && (
          <div className="absolute hidden group-hover:flex flex-col z-10 bg-GrayDark text-white shadow-lg rounded">
          <a href="/incoterms" className="py-4 hover:bg-YellowDark px-4 text-sm">INCOTERMS </a>
            <a href="/container" className="py-4 hover:bg-YellowDark px-4 text-sm">Container</a>
          </div>
        )}
      </li>
    ))}
  </ul>

  {/* Quote Button */}
  <a href='/contactUs'>
  <button className="hidden sm:block bg-gray-900  text-white px-24 py-2 rounded-xl">
    Request a Quote
  </button>
  </a>


    {/* Mobile Navigation */}
    <div className="sm:hidden flex flex-col justify-center items-center text-center h-full mx-auto">
  {/* Hamburger Icon */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="text-white bg-gray-800 p-2  px-32 py-5  lg:ml-0 rounded-full flex justify-center items-center focus:outline-none"
  >
    {isOpen ? <FaTimes /> : <FaBars />}
  </button>

  {/* "Request a quote" Button (Permanently Visible) */}


  {/* Dropdown Menu (Conditional) */}
  <div
    className={`mt-2 w-64 bg-gray-700 rounded-lg shadow-lg z-10 absolute top-full transition-all duration-300 ease-in-out ${
      isOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'
    }`}
  >
<div
  className={`mt-2 w-64 bg-gray-700 rounded-lg shadow-lg z-10 absolute top-full transition-all duration-300 ease-in-out ${
    isOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'
  }`}
>
  <ul className="text-white">
    {items.map((item, index) => (
      <li
        key={index}
        className={` border-b border-gray-700 flex flex-col items-start justify-between px-4 py-2 ${
          openDropdown === index ? '' : ''
        }`}
      >
    {item === 'Start' ? (
  <Link to="/" className="w-full">
    <button
      className={`w-full text-left flex items-center justify-between font-bold ${
        openDropdown === index ? 'bg-yellow-500 p-2' : 'bg-transparent'
      }`}
      onClick={() => handleToggleDropdown(index)}
    >
      <span>{item}</span>
    </button>
  </Link>
) : (
  <button
    className={`w-full text-left flex items-center justify-between ${
      openDropdown === index ? 'bg-yellow-500 p-2' : 'bg-transparent'
    }`}
    onClick={() => handleToggleDropdown(index)}
  >
    <span>{item}</span>
    <FaChevronDown className="text-white ml-2" />
  </button>
)}


        {/* Dropdown menu for various sections */}
        {item === 'Services' && openDropdown === index && (
          <div className="flex flex-col bg-gray-700 text-left text-xs font-roboto items-start text-white  lg:w-[1200px] rounded mt-2">
            <a href="/stuffingUnloading" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">Stuffing Unloading - BR Freight Stiffing</a>
            <a href="/lcl" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">LCL - Less Than Container Loaded</a>
            <a href="/customClearance" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">Custom Clearance</a>
            <a href="/dgr" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">DGR-per-Dangerous perishable Products  </a>
            <a href="/inspection" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">Inspection</a>
            <a href="/packaging" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">Packaging</a>
            <a href="/storage" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">Storage</a>
            <a href="/commercial" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">Commercial and logical consultancy</a>
            <a href="/insurance" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">International Cargo Insurance</a>
          </div>
        )}

        {item === 'Freights' && openDropdown === index && (
          <div className="flex flex-col bg-gray-700 text-left items-start text-white lg:w-[700px] rounded mt-2">
            <a href="/airFreight" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Air Freight</a>
            <a href="/seaFreight" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Sea Freight</a>
            <a href="/roadFreight" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Road Freight</a>
          </div>
        )}

{item === 'Tools' && openDropdown === index && (
  <div className="flex flex-col bg-gray-700 text-left items-start text-white lg:w-[1200px] rounded mt-2">
    <a href="/incoterms" className="block w-full py-3 hover:bg-yellow-500 font-thin lg:w-[1200px] text-xs px-4">IncoTerms</a>
    <a href="/container" className="block w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Containers</a>
  </div>
)}


{item === 'BR Freight Shipping' && openDropdown === index && (
  <div className="flex flex-col bg-gray-700 text-left items-start text-white lg:w-[700px] rounded mt-2">
    <a href="/whoWeAre" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Who We Are</a>
    <a href="/whereinBrazil" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Where We Operate in Brazil</a>
    <a href="/operateWorld" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Where We Operate in the World</a>
    <a href="/missionvisionandvalues" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Mission, Vision, and Values</a>
  </div>
)}

        
      </li>
    ))}
  </ul>
</div>


  </div>
  <button className="mt-4 bg-gray-900 text-white py-2 w-64 rounded-lg shadow-lg focus:outline-none">
    Request a quote
  </button>
</div>



  </div>
</nav>
    </div>
  );
};

export default Navbar;
