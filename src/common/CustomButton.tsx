import React from "react"

interface CustomButtonProps {
  icon?: React.ReactNode
  text: string
  clickHandle?: () => void
}

const CustomButton: React.FC<CustomButtonProps> = ({ icon, text, clickHandle }) => {
  return (
    <button
      onClick={clickHandle}
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium  mb-4 cursor-pointer"
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{text}</span>
    </button>
  )
}

export default CustomButton
