// function onLoad () {
//     console.log('waseem')
//   const arr = [
//     {
//       name: "James",
//       phone: "(713) 123-8965",
//       email: "jmatman@stewart.com",
//     },
//     { name: "Johnny", phone: "(713) 584-9614", email: "jsmith@stewart.com" },
//     { name: "Susan", phone: "(713) 847-1124", email: "johnson@stewart.com" },
//     { name: "Tracy", phone: "(713) 245-4821", email: "jtrichard@stewart.com" },
//   ];
//   let tbody = document.getElementById("tbody");

//    const rows = arr.map((el, i) => {
//     return <tr>
//       <td>{el.name}</td>
//       <td>(713) 123-8965</td>
//       <td>
//         <a href="mailto:jmatman@stewart.com">jmatman@stewart.com</a>
//       </td>
//     </tr>
//    });
//   tbody.append(rows);
// };
function addUser() {
  const currentPath = window.location.pathname;
  const splitUrl = currentPath.split("/");
  const redirectTo = "/addUser";
  window.location.href = splitUrl[0] + redirectTo;
}
