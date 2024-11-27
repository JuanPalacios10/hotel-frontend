export function Logo({ className, logo, children }) {
  return (
    <div className={className}>
      <img src={logo} alt="Logo" />
      {children}
    </div>
  )
}
