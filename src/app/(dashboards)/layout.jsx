export default function DashboardLayOut({ children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
      {/* Side Nav */}
      <div className="col-span-3   p-4">
        <ul>
          <li>User list</li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="col-span-9 bg-white  p-4">{children}</div>
    </div>
  );
}
