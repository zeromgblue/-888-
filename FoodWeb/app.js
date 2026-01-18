    /* =========================
    GLOBAL VARIABLES
    ========================= */

    // เก็บรายการสินค้าในตะกร้า
    let cart = [];


    /* =========================
    NAVIGATION
    ========================= */

    // ปุ่มย้อนกลับ
    function goBack() {
    window.history.back();
    }


    /* =========================
    POPUP
    ========================= */

    // แสดง Popup แจ้งเตือน
    function showPopup(text) {
    const popup = document.getElementById("popup");

    popup.textContent = text;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 1500);
    }


    /* =========================
    CART PANEL
    ========================= */

    // เปิด / ปิด ตะกร้า
    function toggleCart() {
    const cartPanel = document.getElementById("cart");

    cartPanel.style.display =
        cartPanel.style.display === "block" ? "none" : "block";
    }


    /* =========================
    CART LOGIC
    ========================= */

    // เพิ่มสินค้าเข้าตะกร้า
    function addToCart(name, price) {
    cart.push({ name, price });

    updateCart();

    // เล่นเสียงเพิ่มสินค้า
    const addSound = document.getElementById("add-sound");
    if (addSound) addSound.play();

    // แสดง popup
    showPopup("สั่งซื้อแล้ว");
    }

    // อัปเดตข้อมูลตะกร้า
    function updateCart() {
    const itemsEl = document.getElementById("cart-items");
    const countEl = document.getElementById("cart-count");
    const totalEl = document.getElementById("cart-total");

    itemsEl.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;

        itemsEl.innerHTML += `
        <div class="cart-item">
            ${item.name} - ${item.price} บาท
        </div>
        `;
    });

    countEl.textContent = cart.length;
    totalEl.textContent = `รวม: ${total} บาท`;
    }


    /* =========================
    PAYMENT
    ========================= */

    // ชำระเงิน
    function pay() {
    if (cart.length === 0) {
        showPopup("ยังไม่มีสินค้าในตะกร้า");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    // เล่นเสียงจ่ายเงิน
    const paySound = document.getElementById("pay-sound");
    if (paySound) paySound.play();

    alert(`ยอดที่ต้องชำระ: ${total} บาท`);

    // ล้างตะกร้า
    cart = [];
    updateCart();
    toggleCart();
    }
