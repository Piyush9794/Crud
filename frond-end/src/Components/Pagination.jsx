// import React from 'react'

import axios from "axios"
import { useEffect, useState } from "react"
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
const Pagination = () => {
    const [data, setData] = useState([])
    const [TotalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    // const totalPages = 20;

    useEffect(() => {
        // eslint-disable-next-line react-hooks/immutability
        apiData()
    }, [])

    // async function apiData() {
    //     const { data } = await axios.get(
    //         "https://fakestoreapi.com/products"
    //     )
    //     console.log(data);

    //     setData(data)
    // }
    const apiData = async () => {
        const { data } = await axios.get(
            "https://fakestoreapi.com/products"
        )
        console.log(data);

        setData(data)
        setTotalPages(Math.ceil(data.length / 10))

    }
    const handlpage = (page) => {
        setCurrentPage(page)
        setTotalPages(data.length / 4)
        console.log(page);

    }
    const startIndex = (currentPage - 1) * 4;
    const lastIndex = startIndex + 4;

    const totalData = data.slice(startIndex, lastIndex)

    return (

        <>
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {totalData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Image */}
                            <div className="h-56 bg-gray-100 flex items-center justify-center p-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col flex-1">

                                {/* Category */}
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full w-fit mb-2">
                                    {item.category}
                                </span>

                                {/* Title */}
                                <h2 className="text-lg font-semibold line-clamp-2 h-14">
                                    {item.title}
                                </h2>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mt-2 line-clamp-2 flex-1">
                                    {item.description}
                                </p>

                                {/* Price */}
                                <div className="mt-4">
                                    <span className="text-2xl font-bold text-green-600">
                                        ${item.price}
                                    </span>
                                </div>

                                {/* Button */}
                                <button
                                    className="mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
                                >
                                    Add To Cart
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-6 ">
                <ResponsivePagination
                    current={currentPage}
                    total={TotalPages}
                    onPageChange={handlpage}
                />
            </div>
        </>

    )
}

export default Pagination
