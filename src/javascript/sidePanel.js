// document.addEventListener('DOMContentLoaded', function () {
//   function openQuote() {
//     document.getElementById('quoteDrawer').classList.remove('hidden');
//   }
//   function closeQuote() {
//     document.getElementById('quoteDrawer').classList.add('hidden');
//   }

//   window.openQuote = openQuote;
//   window.closeQuote = closeQuote;

//   // Open quote buttons
//   const quoteBtn = document.getElementById('quoteBtn');
//   if (quoteBtn) quoteBtn.addEventListener('click', openQuote);

//   document.querySelectorAll('.ctaQuote').forEach(btn => btn.addEventListener('click', openQuote));
//   const ctaQuote = document.getElementById('ctaQuote');
//   if (ctaQuote) ctaQuote.addEventListener('click', openQuote);

//   // === RFQ Form Handling ===
//   const rfqForm = document.getElementById('rfqForm');

//   function setError(field, message) {
//     const input = document.getElementById(field);
//     const errorEl = document.getElementById("error-" + field);
//     if (!input || !errorEl) return;

//     if (message) {
//       input.classList.remove("border-gray-300", "border-green-500");
//       input.classList.add("border-red-500");
//       input.setAttribute("aria-invalid", "true");
//       errorEl.textContent = message;
//       errorEl.classList.remove("hidden");
//     } else {
//       input.classList.remove("border-red-500");
//       input.classList.add("border-green-500");
//       input.setAttribute("aria-invalid", "false");
//       errorEl.textContent = "";
//       errorEl.classList.add("hidden");
//     }
//   }

//   function validateField(field, value) {
//     switch (field) {
//       case "rfq-company":
//         return value.trim().length >= 2 ? "" : "Company name must be at least 2 characters.";
//       case "rfq-email":
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email address.";
//       case "productSelect":
//         return value !== "" ? "" : "Please select a product.";
//       case "productQty":
//         return value && parseInt(value, 10) > 0 ? "" : "Quantity must be greater than 0.";
//       case "notes":
//         return value.trim().length >= 5 ? "" : "Please provide at least 5 characters.";
//       default:
//         return "";
//     }
//   }

//   if (rfqForm) {
//     const fields = ["rfq-company", "rfq-email", "productSelect", "productQty", "notes"];

//     // Live validation
//     fields.forEach((id) => {
//       const el = document.getElementById(id);
//       if (el) {
//         el.addEventListener("input", (e) => {
//           const error = validateField(id, e.target.value);
//           setError(id, error);
//         });
//         el.addEventListener("blur", (e) => {
//           const error = validateField(id, e.target.value);
//           setError(id, error);
//         });
//       }
//     });

//     rfqForm.addEventListener('submit', async (e) => {
//       e.preventDefault();

//       let valid = true;
//       const data = {
//         company: document.getElementById("rfq-company").value.trim(),
//         email: document.getElementById("rfq-email").value.trim(),
//         product: document.getElementById("productSelect").value,
//         quantity: document.getElementById("productQty").value,
//         notes: document.getElementById("notes").value.trim(),
//       };

//       // Validate all fields
//       Object.entries(data).forEach(([field, value]) => {
//         let key;
//         if (field === "company") key = "rfq-company";
//         else if (field === "email") key = "rfq-email";
//         else if (field === "product") key = "productSelect";
//         else if (field === "quantity") key = "productQty";
//         else key = field;
//         const error = validateField(key, value);
//         setError(key, error);
//         if (error) valid = false;
//       });

//       if (!valid) return;

//       try {
//         const res = await fetch("/api/rfq", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         });

//         if (res.ok) {
//           // Show success message
//           let successMsg = document.getElementById("rfqSuccessMsg");
//           if (!successMsg) {
//             successMsg = document.createElement("p");
//             successMsg.id = "rfqSuccessMsg";
//             successMsg.className = "mt-3 text-green-600 font-medium";
//             rfqForm.appendChild(successMsg);
//           }
//           successMsg.textContent = "✅ Your RFQ has been submitted. Our sales team will contact you shortly.";

//           rfqForm.reset();
//           rfqForm.querySelectorAll("input, select, textarea").forEach((el) => {
//             el.classList.remove("border-red-500", "border-green-500");
//             el.removeAttribute("aria-invalid");
//           });

//           // Auto close drawer after short delay
//           setTimeout(() => {
//             successMsg.remove();
//             closeQuote();
//           }, 2000);
//         } else {
//           console.error("Failed to submit RFQ:", await res.text());
//         }
//       } catch (err) {
//         console.error("Error submitting RFQ:", err);
//       }
//     });
//   }
// });


const form = document.getElementById("contactForm");

function showError(id, message) {
  const el = document.getElementById("error-" + id);
  if (message) {
    el.textContent = message;
    el.classList.remove("hidden");
  } else {
    el.textContent = "";
    el.classList.add("hidden");
  }
}

function validateField(id, value) {
  switch (id) {
    case "name":
      return value.trim().length >= 3 ? "" : "Full name must be at least 3 characters.";
    case "company":
      return value.trim().length >= 2 ? "" : "Company must be at least 2 characters.";
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email format.";
    case "phone":
      return value.trim() === "" || /^\+?[0-9\s\-()]{7,15}$/.test(value)
        ? ""
        : "Invalid phone number.";
    case "message":
      return value.trim().length >= 10 ? "" : "Message must be at least 10 characters.";
    default:
      return "";
  }
}

// Real-time validation
["name", "company", "email", "phone", "message"].forEach((id) => {
  document.getElementById(id).addEventListener("input", (e) => {
    const error = validateField(id, e.target.value);
    showError(id, error);
  });
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let valid = true;
  const data = {};

  ["name", "company", "email", "phone", "message"].forEach((id) => {
    const value = document.getElementById(id).value;
    const error = validateField(id, value);
    showError(id, error);
    if (error) valid = false;
    data[id] = value.trim();
  });

  if (!valid) return;

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      form.reset();
      document.querySelectorAll("[id^=error-]").forEach((el) => el.classList.add("hidden"));
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (err) {
    console.error(err);
    alert("Network error. Try again later.");
  }
});