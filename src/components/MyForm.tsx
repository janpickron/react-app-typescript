// emmet is a time saver within vscode
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

interface IForm {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  message?: string;
}

const MyForm = () => {
  const [form, setForm] = useState<IForm>();

  // this ignores ts on the next line
  // @ts-ignore

  function handleForm(event: React.FormEvent) {
    event.preventDefault();

    const newTarget = event.target as HTMLFormElement;

    setForm({
      // bring the information of the form -> spread operator
      ...form,
      // name = email or name = password:
      [newTarget.name]: newTarget.value,
    });
  }

  console.log(form);

  // Adding new contact
  const handleAddContact = (event: any) => {
    // stop from refreshing browser
    event.preventDefault();

    // Checking to see if there is no empty data or input
    if (!form?.firstName || !form?.lastName || !form.email || !form.message) {
      window.confirm("Cannot leave the field empty");
      return; // Don't proceed with the POST request
    }

    // Trim the title and content to remove whitespace from both side of string
    const trimmedFirstName = form.firstName.trim();
    const trimmedLastName = form.lastName.trim();
    const trimmedEmail = form.email.trim();

    const trimmedForm = {
      firstName: trimmedFirstName,
      lastName: trimmedLastName,
      email: trimmedEmail,
      message: form.message,
    };
    fetch(`http://localhost:4000/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trimmedForm),
    })
      .then((res) => res.json())
      .then((data) => {
        // Log the response data
        console.log("Response Data:", data);
        // navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="container mx-auto">
        <h1>Contact Us</h1>
        <form id="form" className="form" action="">
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="firstName"> First Name: </label>
                </td>
                <td>
                  <input
                    required
                    autoFocus
                    name="firstName"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={handleForm}
                    // onChange={(e) => handleForm(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lastName"> Last Name:</label>
                </td>
                <td>
                  <input
                    required
                    name="lastName"
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={handleForm}
                    // onChange={(e) => handleForm(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Email::</label>
                </td>
                <td>
                  <input
                    required
                    name="email"
                    type="text"
                    id="email"
                    placeholder="email"
                    onChange={handleForm}
                    // onChange={(e) => handleForm(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="message"> Message: </label>
                </td>
                <td>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter text"
                    onChange={handleForm}
                  ></textarea>

                  {/* onChange={(e) => handleForm(e)} */}
                </td>
              </tr>
            </tbody>
          </table>
          <p></p>
          <div className="btn btn-primary">
            <Button onClick={handleAddContact}>Add Contact</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyForm;
