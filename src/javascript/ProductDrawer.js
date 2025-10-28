const productData = {
  Pharmaceutical: {
    name: "Pharmaceutical Excipients",
    image: "src/images/pills.jpg",
    description: "High-purity binders, disintegrants, and lubricants for tablet and capsule formulations.",
    extra: "Our excipients meet international pharmacopeia standards (USP/NF, EP, JP). Available in multiple grades and particle sizes for formulation flexibility.",
    specs: "Purity: ≥99.5%, Moisture: ≤0.5%, Particle size: Customizable to formulation requirements.",
    uses: [
      "Tablet and capsule formulation support.",
      "Improves stability and consistency of dosage forms.",
      "Enhances dissolution and bioavailability of active ingredients."
    ]
  },
  Aluminum: {
    name: "Aluminum Sulphate",
    image: "src/images/fertilizer packets.jpg",
    description: "Effective coagulant for water purification processes in municipal and industrial applications.",
    extra: "Available in granular or liquid form. Ideal for drinking water treatment, paper sizing, and wastewater clarification.",
    specs: "Form: Granular/Liquid, Purity: ≥17%, Solubility: Excellent in water.",
    uses: [
      "Municipal water purification.",
      "Wastewater treatment and clarification.",
      "Paper manufacturing and dye fixing."
    ]
  },
  Sodium: {
    name: "Sodium Cyanide",
    image: "src/images/cyidanid.jpg",
    description: "Gold extraction reagent with strict safety protocols and handling documentation.",
    extra: "Compliant with ISO 9001 and Cyanide Code standards. Supplied in briquette form with tamper-proof packaging.",
    specs: "Purity: ≥98%, Form: Briquette, Packaging: Sealed drums or IBC containers.",
    uses: [
      "Gold and silver extraction processes.",
      "Electroplating and metal treatment applications.",
      "Chemical synthesis for specialty compounds."
    ]
  },
  Ammonium: {
    name: "Ammonium Nitrate",
    image: "src/images/amoonia.jpg",
    description: "High-nitrogen fertilizer component with controlled formulation for optimal crop nutrition.",
    extra: "Formulated for stability and uniform granule size. Suitable for agricultural and industrial use.",
    specs: "Nitrogen Content: 34%, Form: Granular, Stability: Enhanced anti-caking formulation.",
    uses: [
      "Agricultural crop fertilization.",
      "Blasting agents in mining and quarrying.",
      "Industrial oxidizer in chemical manufacturing."
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ctaQuote").forEach(btn => {
    btn.addEventListener("click", () => openDrawer(btn.id));
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
  document.getElementById("drawerSpecs").textContent = product.specs || "";

  const usesContainer = document.getElementById("drawerUses");
  usesContainer.innerHTML = "";
  if (product.uses && product.uses.length) {
    product.uses.forEach(use => {
      const li = document.createElement("li");
      li.textContent = use;
      usesContainer.appendChild(li);
    });
  }

  document.getElementById("productDrawer").classList.remove("hidden");
}

function closeDrawer() {
  document.getElementById("productDrawer").classList.add("hidden");
}
