export default function AnimationWidget() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-20 h-20 object-cover" 
    >
      <source src="/animation.webm" type="video/webm" />
    </video>
  )
}
