export function getPageName(location: Location) {
  switch (location.pathname) {
    case "/homepage":
      return "Home";
    case "/about":
      return "About";
    case "/admin":
      return "Admin";
    default:
      return "Home";
  }
}
