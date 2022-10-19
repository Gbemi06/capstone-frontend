import { FormEvent, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RegistrationInterface } from "../types/RegistrationInterface";

const MyProfile = () => {
  const [currentUser, setCurrentUser] = useState<RegistrationInterface | null>(
    null
  );

  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();
    editUser();
  };

  const editProfile = () => {
    console.log("edit profile");
    navigate("/editprofile");
  };

  const handleDelete = (e: FormEvent) => {
    e.preventDefault();
    deleteUser();
  };

  // ==================FETCH========================
  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:4002/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });

      if (response.ok) {
        const data = (await response.json()) as RegistrationInterface;
        console.log(data);
        setCurrentUser(data);
      } else {
        alert("Error getting Users");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(currentUser);

  const editUser = async () => {
    try {
      let response = await fetch("http://localhost:4002/users/register/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify(currentUser),
      });
      if (response.ok) {
        alert("User Updated Successfully");
        let data = await response.json();
        console.log(data);
        setCurrentUser(data);
      } else {
        alert("Error Updating User");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    try {
      let response = await fetch("http://localhost:4002/users/register/me", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      if (response.ok) {
        alert("User Deleted Successfully");
        let data = await response.json();
        console.log(data);
        setCurrentUser(data);
      } else {
        alert("Error Deleting User");
      }
    } catch (error) {
      console.log(error);
    }
  };

  onsubmit = async (fields) => {
    console.log(fields);
    // const { profilePic } = fields;
    // const formData = new FormData();
    // formData.append("profilePic", profilePic);
    try {
      let response = await fetch("http://localhost:4002/users/register/me", {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        // body: formData,
      });
      if (response.ok) {
        alert("Profile Picture Uploaded Successfully");
        let data = await response.json();
        console.log(data);
        setCurrentUser(data);
      } else {
        alert("Error Uploading Profile Picture");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadProfilePicture = async (e: HTMLFormElement) => {
    // e.preventDefault();

    const inpFile = document.getElementById("profilePic");
    // console.log(inpFile?.files[0]);
    const formData = new FormData();
    // formData.append("profilePic", inpFile?.files[0]);
    console.log(formData);
    try {
      let response = await fetch("http://localhost:4002/profile/picture", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: formData,
      });
      if (response.ok) {
        alert("Profile Picture Uploaded Successfully");
        let data = await response.json();
        console.log(data);
        setCurrentUser(data);
      } else {
        alert("Error Uploading Profile Picture");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Phone Number" />
        </Form.Group>
        <Form.Group controlId="formBasicProfilePic">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control type="file" id="profilePic" />
        </Form.Group>
      </Form>
      {/* <button onSubmit={onsubmit}>Submit</button>
      <button onClick={editProfile}>Edit Profile</button>
      <button onClick={handleDelete}>Delete Profile</button> */}

      {/* <button onClick={uploadProfilePicture}>Upload Profile Picture</button> */}
    </div>
  );
};

//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-header">
//               <h3>My Profile</h3>
//             </div>
//             <div className="card-body">
//               <div className="row">
//                 <div className="col-md-4">
//                   <img
//                     src={currentUser?.profilePic}
//                     alt="profilePic"
//                     className="img-fluid"
//                   />
//                 </div>
//                 <div className="col-md-8">
//                   <h5>{currentUser?.firstName}</h5>
//                   <h5>{currentUser?.lastName}</h5>
//                   <h5>{currentUser?.email}</h5>
//                   {/* <h5>{currentUser?.phone}</h5>
//                                     <h5>{currentUser?.address}</h5>
//                                     <h5>{currentUser?.city}</h5>
//                                     <h5>{currentUser?.state}</h5> */}
//                 </div>
//               </div>
//             </div>
//             <div className="card-footer">
//               <button className="btn btn-primary" onClick={editProfile}>
//                 Edit Profile
//               </button>
//               <button className="btn btn-danger" onClick={handleDelete}>
//                 Delete Profile
//               </button>
//               {/* <button
//                                 className="btn btn-success"
//                                 onClick={uploadProfilePicture}
//                             >
//                                 Upload Profile Picture
//                             </button> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//     formData.append("profile", file);

//     try {
//       let response = await fetch(
//         "http://localhost:4002/users/register/me/profilePicture",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
//           },
//           body: formData,
//         }
//       );
//       if (response.ok) {
//         alert("Profile Picture Uploaded Successfully");
//         let data = await response.json();
//         console.log(data);
//         setCurrentUser(data);
//       } else {
//         alert("Error Uploading Profile Picture");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return <div id="profilePic"></div>;
// };
export default MyProfile;
