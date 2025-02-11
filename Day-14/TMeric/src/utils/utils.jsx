import * as Yup from "yup";
export  const sideBarIconsStyles = {
  cursor: "pointer",
  fontSize: "30px",
  padding:"1rem 0"
};
export const handleOnClickNavBarIcons = (navigate, path) => {
  navigate(path);
};
export const SideBarPageIconsAndPaths = [
  { iconName: "bi-house-door ", navigationPath: "/home", default: "true" },
  { iconName: "bi-buildings", navigationPath: "/home" },
  { iconName: "bi-people", navigationPath: "/admin/dashboard" },
  { iconName: "bi-person-vcard", navigationPath: "/home" },
  { iconName: "bi-plus-circle", navigationPath: "/newuser" },
];
export const headerIcons = [
  { iconName: "bi-gear-wide-connected", navigationPath: "/" },
  { iconName: "bi-bell-fill", navigationPath: "/" },
];


export const validationSchma = Yup.object({
  name: Yup.string()
    .required("Required"),
    userId: Yup.string()
    .required("Required"),
    jobRole: Yup.string().required("Required"),
    url: Yup.string().required("Required"),
});
export async function fetchData(url,method) {
  const link = url;
  const response = await fetch(link,method);
  if (response.ok) {
    const data = await response.json();    
    localStorage.setItem("userData", JSON.stringify(data));
  
  }
}

export const handleDeleteReq=(id)=>{
  console.log(id)
  const method={
    method:"DELETE"
  }
  async function reqDEl(link,method){
    const res = await fetch(link, method)
    if (res.ok) {
     await fetchData("http://localhost:3000/users")
      window.location.reload()
    }
  }
  reqDEl(`http://localhost:3000/users/${id}`,method)
}