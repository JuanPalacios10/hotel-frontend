export function Logo({ logo, children }) {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
      {children}
    </div>
  )
}
