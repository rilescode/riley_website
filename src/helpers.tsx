export function getPageName(pathname: string) {
  if (pathname.includes("/homepage")) {
    return "Home";
  } else if (pathname.includes("/about")) {
    return "About";
  } else if (pathname.includes("/admin")) {
    return "Admin";
  } else {
    return "Home";
  }
}
