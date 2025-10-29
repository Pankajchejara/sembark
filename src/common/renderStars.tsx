import { FaStar } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io"
import { FaRegStar } from "react-icons/fa";
export const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    for (let i = 0; i < fullStars; i++) {
      stars.push(
      <FaStar  key={`full-${i}`} className="text-yellow-500" />)
    }

    if (hasHalfStar) {
      stars.push(<IoIosStarHalf  key="half" className="text-yellow-500" />)
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />)
    }

    return <div className="flex items-center gap-1">{stars}</div>
  }
