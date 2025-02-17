export const filterData = [
  {
    input: { type: "search", name: "search" },
    catogories:{title:"catogories",subCt:['All',"office", "living room", "kitchen", "bedroom", "dining", "kids"]},
    company: {title:"company",comLst:["all", "marcos", "liddy", "ikea", "caressa"]},
    color:{ title:"color",colors:[ "all","#ff0000", "#00ff00", "#0000ff", "#000", "#ffb900"]},
    range: { title:"Price",type: "range", name: "range", min: 0, max: "309999" },
    checkbox: { title:"Free shiping",type: "checkbox", name: "freeShiping" },
  },
];

export const convertPrice = (price)=>{
  const str = String(price);
  return Number(str.slice(0,-2)+"."+str.slice(-2))
}