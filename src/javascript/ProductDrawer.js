
const productData = {
  Pharmaceutical: {
    name: "Pharmaceutical Excipients",
    image: "src/images/pills.jpg",
    description: "High-purity binders, disintegrants, and lubricants for tablet and capsule formulations.",
    extra: "Our excipients meet international pharmacopeia standards (USP/NF, EP, JP). Available in multiple grades and particle sizes for formulation flexibility."
  },
  Aluminum: {
    name: "Aluminum Sulphate",
    image: "src/images/fertilizer packets.jpg",
    description: "Effective coagulant for water purification processes in municipal and industrial applications.",
    extra: "Available in granular or liquid form. Ideal for drinking water treatment, paper sizing, and wastewater clarification."
  },
  Sodium: {
    name: "Sodium Cyanide",
    image: "src/images/cyidanid.jpg",
    description: "Gold extraction reagent with strict safety protocols and handling documentation.",
    extra: "Compliant with ISO 9001 and Cyanide Code standards. Supplied in briquette form with tamper-proof packaging."
  },
  Ammonium: {
    name: "Ammonium Nitrate",
    image: "src/images/amoonia.jpg",
    description: "High-nitrogen fertilizer component with controlled formulation for optimal crop nutrition.",
    extra: "Formulated for stability and uniform granule size. Suitable for agricultural and industrial use."
  }
};


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".ctaQuote");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const productId = btn.id;
      openDrawer(productId);
    });
  });
});

function openDrawer(id) {
  const product = productData[id];
  if (!product) return;

  document.getElementById("drawerTitle").textContent = product.name;
  document.getElementById("drawerImage").src = product.image;
  document.getElementById("drawerImage").alt = product.name;
  document.getElementById("drawerDescription").textContent = product.description;
  document.getElementById("drawerExtra").textContent = product.extra;

  document.getElementById("productDrawer").classList.remove("hidden");
}

function closeDrawer() {
  document.getElementById("productDrawer").classList.add("hidden");
}

