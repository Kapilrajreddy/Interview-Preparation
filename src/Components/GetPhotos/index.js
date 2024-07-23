// import { useEffect, useState } from "react"
// import '../../index.css'


// const GetPhotos=()=>{

//     const [photos,setPhotos] = useState([])
//     const [currentPage,setCurrentPage] = useState(1)

//     const photosPerPage = 100

//     const [startIndex,setStartIndex] = useState(0)
//     const [endIndex,setEndIndex] = useState(51)

//     const fetchdata=async()=>{
        
//         try{
//             const response = await fetch(
//               "https://jsonplaceholder.typicode.com/photos",
//               {
//                 method: "GET",
//               }
//             );

//             if(response.ok){
//                 const data =await response.json()
//                 console.log(data)
//                 setPhotos(data)
//             }

//         }catch(error){
//             console.log(error)
//         }
//     }

//     useEffect(()=>{
//         fetchdata()
//     },[])

//     const handleNext=()=>{
//         setStartIndex((prev)=>prev+10)
//         setEndIndex((prev)=>prev+10)
//     }

//     const handlePrev=()=>{
//          setStartIndex((prev) => prev - 10);
//          setEndIndex((prev) => prev - 10);
//     }
//     console.log(startIndex,endIndex)

//     const TotalPages = Math.ceil(photos.length/photosPerPage)

//     const handlePagenation=(index)=>{
//          setStartIndex(index * photosPerPage);
//          setEndIndex((index + 1) * photosPerPage + 1);
//     }

//     return (
//       <div>
//         <div className="flex flex-wrap gap-10">
//           {photos.slice(startIndex, endIndex).map((image) => (
//             <li key={image.id} className="list-none w-24">
//               <img src={image.url} alt="" className="w-full" />
//             </li>
//           ))}
//         </div>
//         {/* <div>
//           <button disabled={startIndex===0} onClick={handlePrev}>prev</button>
//           <button disabled={endIndex===photos.length-10} onClick={handleNext}>Next</button>
//         </div> */}
//        {[...Array(TotalPages)].map((each,index)=>(

//         <button onClick={()=>handlePagenation(index)} className="bg-green-200 p-2 rounded-sm  m-1">{index+1}</button>
//        ))}
//       </div>
//     );
// }

// export default GetPhotos


import { useEffect, useState } from "react";
import "../../index.css";

const GetPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 10; // Number of photos to display per page

  const fetchdata = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos",
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setPhotos(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const totalPages = Math.ceil(photos.length / photosPerPage);
  const startIndex = (currentPage - 1) * photosPerPage;
  const endIndex = startIndex + photosPerPage;
  const currentPhotos = photos.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxButtons = 10;
    const halfMaxButtons = Math.floor(maxButtons / 2);
    let startPage = Math.max(currentPage - halfMaxButtons, 1);
    let endPage = Math.min(startPage + maxButtons - 1, totalPages);

    if (endPage - startPage < maxButtons - 1) {
      startPage = Math.max(endPage - maxButtons + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`bg-green-200 p-2 rounded-sm m-1 ${
            i === currentPage ? "bg-green-500" : ""
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <div className="flex flex-wrap gap-10">
        {currentPhotos.map((image) => (
          <li key={image.id} className="list-none w-24">
            <img src={image.url} alt="" className="w-full" />
          </li>
        ))}
      </div>
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="bg-green-200 p-2 rounded-sm m-1"
        >
          Prev
        </button>
        {renderPageNumbers()}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-green-200 p-2 rounded-sm m-1"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GetPhotos;
