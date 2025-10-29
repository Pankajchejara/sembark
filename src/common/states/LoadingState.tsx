import { LuLoaderCircle } from "react-icons/lu";

export default function LoadingState() {
  return (
    <div className='flex items-center gap-4'>
        <LuLoaderCircle className='animate-spin' />
        Please wait...
    </div>
  )
}
