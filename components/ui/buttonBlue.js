import React from 'react'

const ButtonBlue = ({ children, onClick }) => {
    return (
        <button className="w-[170px] h-[50px] hover:bg-opacity-80 active:scale-90 active:bg-opacity-100 rounded text-sm bg-primary_blue text-white" onClick={onClick}  >
            {children}
        </button>
    )
}

export default ButtonBlue