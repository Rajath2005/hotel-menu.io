// Sample Data
const menuData = {
  beverages: [
    { name: "Masala Chai", price: "₹40", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058735/filter_jjaozc.jpg" },
    { name: "Lassi", price: "₹50", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058741/lassi_ttxyta.jpg" },
    { name: "Filter Coffee", price: "₹45", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058735/filter_jjaozc.jpg" },
    { name: "Aam Panna", price: "₹55", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058721/Aam_Panna_wksjn8.jpg" },
    { name: "Jaljeera", price: "₹45", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058740/jaljeera_gd575s.jpg" },
    { name: "Thandai", price: "₹70", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058734/beverages_gjavoo.jpg" },
    { name: "Sugarcane Juice", price: "₹35", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058734/beverages_gjavoo.jpg" },
    { name: "Badam Milk", price: "₹60", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058722/badam_yxzzs7.jpg" }
],

chinese: [
  { name: "Chilli Gobi", price: "₹120", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058724/chilli_qcq2q9.jpg" },
  { name: "Hakka Noodles", price: "₹130", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058737/hakka_h7hgwg.jpg" },
  { name: "Vegetable Spring Rolls", price: "₹90", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058738/Chinese_Cuisine_lmmpm6.jpg" },
  { name: "Vegetable Chow Mein", price: "₹130", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058741/chowmein_vsaxqu.jpg" },
  { name: "Gobi Manchurian", price: "₹110", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058737/Gobi_yvhcct.jpg" }
],



indian: [
  { name: "Paneer Tikka", price: "₹150", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058751/paneer_gssuym.jpg" },
  { name: "Dal Tadka", price: "₹120", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058734/dal_gkocel.jpg" },
  { name: "Chole Bhature", price: "₹140", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058730/chole_lyaqyv.jpg" },
  { name: "Masala Dosa", price: "₹100", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058744/masala-d_wcs428.jpg" },
  { name: "Samosa", price: "₹40", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058738/indian-cuisine_kj9pvm.jpg" },
  { name: "Gulab Jamun", price: "₹50", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058736/gulab_hezplt.jpg" },
  { name: "Rasgulla", price: "₹50", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058753/rasgulla_on1yn8.jpg" }
],
Rice: [
  { name: "Jeera Rice", price: "₹80", image: "icon/jeera.jpeg" },
  { name: "Veg Fried Rice", price: "₹110", image: "icon/veg.jpeg" },
  { name: "Paneer Fried Rice", price: "₹130", image: "icon/paneer.jpeg" },
  { name: "Schezwan Fried Rice", price: "₹130", image: "icon/schezwan.jpeg" },
  { name: "Curd Rice", price: "₹70", image: "icon/curd.jpeg" },
  { name: "Lemon Rice", price: "₹80", image: "icon/lemon.jpeg" },
  { name: "Tomato Rice", price: "₹90", image: "icon/tomato.jpeg" },
  { name: "Vegetable Biryani", price: "₹140", image: "icon/veg.jpeg" },
  { name: "Pulao", price: "₹120", image: "icon/pulao.jpeg" },

],
Special_Combos: [
  { name: "North Indian Thali", price: "₹180", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058752/north_khmdvt.jpg" },
  { name: "South Indian Thali", price: "₹160", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058738/indian-cuisine_kj9pvm.jpg" },
  { name: "Chapati & Sabzi Combo", price: "₹130", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058724/chapathi_euexrc.jpg" }
],

desserts: [
  { name: "Gulab Jamun", price: "₹50", image: "icon/gulab.jpeg" },
  { name: "Rasgulla", price: "₹50", image: "icon/rasgulla.jpeg" },
  { name: "Jalebi", price: "₹40", image: "icon/jalebi.jpeg" },
  { name: "Kheer", price: "₹60", image: "icon/kheer.jpeg" },
  { name: "Mysore Pak", price: "₹80", image: "icon/mysore.jpeg" },
  { name: "Malpua", price: "₹75", image: "icon/malpuva.jpeg" },
  ,

  // Ice Creams
  { name: "Vanilla Ice Cream", price: "₹60", image: "icon/vanilla.jpeg" },
  { name: "Chocolate Ice Cream", price: "₹70", image: "icon/chocolate.jpeg" },
  { name: "Strawberry Ice Cream", price: "₹70", image: "icon/strawberry.jpeg" },
  { name: "Mango Ice Cream", price: "₹80", image: "icon/mango.jpeg" },
  { name: "Butterscotch Ice Cream", price: "₹80", image: "icon/butterscotch.jpeg" },
  { name: "Kulfi", price: "₹100", image: "icon/kulfi.jpeg" }
]

  };
  
  
  // DOM Elements
  const homepage = document.getElementById("homepage");
  const categoryPage = document.getElementById("category-page");
  const backButton = document.getElementById("back-button");
  const categoryTitle = document.getElementById("category-title");
  const itemsList = document.querySelector(".items-list");
  
  // Event Listeners
  document.querySelectorAll(".category-card").forEach(category => {
    category.addEventListener("click", () => {
      const categoryName = category.getAttribute("data-category");
      showCategoryPage(categoryName);
    });
  });
  
  backButton.addEventListener("click", () => {
    homepage.classList.add("active");
    categoryPage.classList.remove("active");
  });
  
  // Functions
 // Highlight Active Category
function showCategoryPage(category) {
  homepage.classList.remove("active");
  categoryPage.classList.add("active");

  categoryTitle.textContent = category;
  itemsList.innerHTML = "";

  menuData[category].forEach(item => {
      itemsList.innerHTML += `
          <div class="item">
              <img src="${item.image}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p class="price">${item.price}</p>
          </div>
      `;
  });

  // Add Active Class for Highlight Effect
  document.querySelectorAll(".category-card").forEach(card => {
      card.classList.remove("active-category");
  });
  document.querySelector(`[data-category="${category}"]`).classList.add("active-category");
}

// Apply Fade-in Effect
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
      document.body.classList.add("fade-in");
  }, 500);
});

  
