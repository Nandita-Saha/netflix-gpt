import { toPng } from "html-to-image";
import React, { useRef } from "react";

const HtmlToImage = () => {
  const elementRef = useRef(null);
  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <table
        ref={elementRef}
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: "#04AA6D",
                padding: "12px 8px",
                textAlign: "left",
                border: "1px solid #ddd",
              }}
            >
              Company
            </th>
            <th
              style={{
                backgroundColor: "#04AA6D",
                padding: "12px 8px",
                textAlign: "left",
                border: "1px solid #ddd",
              }}
            >
              Contact
            </th>
            <th
              style={{
                backgroundColor: "#04AA6D",
                padding: "12px 8px",
                textAlign: "left",
                border: "1px solid #ddd",
              }}
            >
              Country
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Alfreds Futterkiste
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Maria Anders
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Germany
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Berglunds snabbköp
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Christina Berglund
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Sweden
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Centro comercial Moctezuma
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Francisco Chang
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Mexico
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={htmlToImageConvert}>Download Image</button>
    </div>
  );
};

export default HtmlToImage;
