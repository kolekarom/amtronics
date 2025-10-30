export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-neutral-gray"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-blue border-r-accent-orange animate-spin"></div>
      </div>
    </div>
  )
}
