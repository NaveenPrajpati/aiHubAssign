document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const featureDiv = document.getElementById("features");

const pdfTools = [
  {
    img: "../assets/images/feature1.svg",
    name: "Merge PDF",
    description:
      "Combine PDFs in the order you want with the easiest PDF merger available.",
  },
  {
    img: "../assets/images/feature2.svg",
    name: "Split PDF",
    description:
      "Separate one page or a whole set for easy conversion into independent PDF files.",
  },
  {
    img: "../assets/images/feature3.svg",
    name: "Compress PDF",
    description: "Reduce file size while optimizing for maximal PDF quality.",
  },
  {
    img: "../assets/images/feature4.svg",
    name: "PDF to Word",
    description:
      "Easily convert your PDF files into easy to edit DOC and DOCX documents. The converted WORD document is almost 100% accurate.",
  },
  {
    img: "../assets/images/feature5.svg",
    name: "PDF to PowerPoint",
    description:
      "Turn your PDF files into easy to edit PPT and PPTX slideshows.",
  },
  {
    img: "../assets/images/feature6.svg",
    name: "PDF to Excel",
    description:
      "Pull data straight from PDFs into Excel spreadsheets in a few short seconds.",
  },
  {
    img: "../assets/images/feature7.svg",
    name: "Word to PDF",
    description:
      "Make DOC and DOCX files easy to read by converting them to PDF.",
  },
  {
    img: "../assets/images/feature8.svg",
    name: "PowerPoint to PDF",
    description:
      "Make PPT and PPTX slideshows easy to view by converting them to PDF.",
  },
  {
    img: "../assets/images/feature9.svg",
    name: "Excel to PDF",
    description:
      "Make EXCEL spreadsheets easy to read by converting them to PDF.",
  },
  {
    img: "../assets/images/feature10.svg",
    name: "Edit PDF",
    description:
      "Add text, images, shapes or freehand annotations to a PDF document. Edit the size, font, and color of the added content.",
  },
  {
    img: "../assets/images/assets/asset 25.svg",
    name: "PDF to JPG",
    description:
      "Convert each PDF page into a JPG or extract all images contained in a PDF.",
  },
  {
    img: "../assets/images/assets/asset 26.svg",
    name: "JPG to PDF",
    description:
      "Convert JPG images to PDF in seconds. Easily adjust orientation and margins.",
  },
  {
    img: "../assets/images/assets/asset 27.svg",
    name: "Sign PDF",
    description: "Sign yourself or request electronic signatures from others.",
  },
  {
    img: "../assets/images/assets/asset 28.svg",
    name: "Watermark",
    description:
      "Stamp an image or text over your PDF in seconds. Choose the typography, transparency and position.",
  },
  {
    img: "../assets/images/assets/asset 29.svg",
    name: "Rotate PDF",
    description:
      "Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!",
  },
  {
    img: "../assets/images/assets/asset 30.svg",
    name: "HTML to PDF",
    description:
      "Convert webpages in HTML to PDF. Copy and paste the URL of the page you want and convert it to PDF with a click.",
  },
  {
    img: "../assets/images/assets/asset 31.svg",
    name: "Unlock PDF",
    description:
      "Remove PDF password security, giving you the freedom to use your PDFs as you want.",
  },
  {
    img: "../assets/images/assets/asset 32.svg",
    name: "Protect PDF",
    description:
      "Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access.",
  },
  {
    img: "../assets/images/assets/asset 33.svg",
    name: "Organize PDF",
    description:
      "Sort pages of your PDF file however you like. Delete PDF pages or add PDF pages to your document at your convenience.",
  },
  {
    img: "../assets/images/assets/asset 34.svg",
    name: "PDF to PDF/A",
    description:
      "Transform your PDF to PDF/A, the ISO-standardized version of PDF for long-term archiving. Your PDF will preserve formatting when accessed in the future.",
  },
  {
    img: "../assets/images/assets/asset 35.svg",
    name: "Repair PDF",
    description:
      "Repair a damaged PDF and recover data from corrupt PDF. Fix PDF files with our Repair tool.",
  },
  {
    img: "../assets/images/assets/asset 36.svg",
    name: "Page numbers",
    description:
      "Add page numbers into PDFs with ease. Choose your positions, dimensions, typography.",
  },
  {
    img: "../assets/images/assets/asset 37.svg",
    name: "Scan to PDF",
    description:
      "Capture document scans from your mobile device and send them instantly to your browser.",
  },
  {
    img: "../assets/images/assets/asset 38.svg",
    name: "Compare PDF",
    description:
      "Show a side-by-side document comparison and easily spot changes between different file versions.",
  },
  {
    img: "../assets/images/assets/asset 39.svg",
    name: "Redact PDF",
    description:
      "Redact text and graphics to permanently remove sensitive information from a PDF.",
  },
  {
    img: "../assets/images/assets/asset 40.svg",
    name: "OCR PDF",
    description:
      "Easily convert scanned PDF into searchable and selectable documents.",
  },
];

let featuresHTML = "";
pdfTools.forEach((item) => {
  featuresHTML += `
        <div class="feature-item">
            <img src="${item.img}" alt="${item.name}" />
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        </div>
    `;
});

featureDiv.innerHTML = featuresHTML;

const userReviews = [
  {
    img: "../assets/images/user1.png",
    userName: "JohnDoe123",
    review:
      "This PDF toolset is incredibly versatile and easy to use. I especially love the Merge PDF and Compress PDF features. Highly recommended!",
    rating: 5,
  },
  {
    img: "../assets/images/user2.png",
    userName: "JaneSmith456",
    review:
      "The PDF to Word converter worked perfectly for my needs. The conversion was almost flawless, and it saved me a lot of time. Great tool!",
    rating: 4,
  },
  {
    img: "../assets/images/user3.png",
    userName: "MarkBrown789",
    review:
      "I had some issues with the PDF to Excel feature as it didn't extract the data as expected. However, the other tools are quite useful.",
    rating: 3,
  },
  {
    img: "../assets/images/user4.png",
    userName: "LisaWhite321",
    review:
      "The Edit PDF tool is a game-changer! I was able to annotate and edit my PDFs with ease. The interface is user-friendly and efficient.",
    rating: 5,
  },
];

const testimonialDiv = document.getElementById("testimonials");
let testimonialHtml = "";
userReviews.forEach((item) => {
  testimonialHtml += `
        <div class="testimonial-item">
          <img src="${item.img}" alt="User Img" />
          <div id="starBox">
            <img src="../assets/images/star.png" alt="User 1" id="star" />
            <div>${item.rating}/5</div>
          </div>
          <h3>${item.userName}</h3>
          <p>
          ${item.review}
          </p>
        </div>
`;
});
testimonialDiv.innerHTML = testimonialHtml;
