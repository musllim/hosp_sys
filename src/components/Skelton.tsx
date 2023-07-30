import React from 'react'

const Skelton = () => {
    return (
        <div>
            <div className="flex gap-2 my-4">

                <Bar height='3rem' width='17rem' />
                <Bar height='3rem' width='17rem' />
                <Bar height='3rem' width='7rem' />
            </div>
            <Bar height='1rem' width='10rem' />
        </div>
    )
}

const Bar: React.FC<{ width: string; height: string }> = ({ height, width }) => <div style={{ width, height }} className="bg-gray-400 relative rounded-md before:w-3 before:"></div>
export default Skelton
