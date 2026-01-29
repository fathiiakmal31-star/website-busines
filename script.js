// ... tambahkan fungsi ini atau perbarui fungsi addToCart sebelumnya ...

function addToCart(id) {
    const p = products.find(i => i.id === id);
    const inCart = cart.find(c => c.id === id);
    inCart ? inCart.qty++ : cart.push({...p, qty: 1});
    
    // Animasi tombol keranjang biar kerasa ada interaksi
    const cartBtn = document.querySelector('.cart-trigger');
    cartBtn.style.transform = 'scale(1.1)';
    setTimeout(() => { cartBtn.style.transform = 'scale(1)'; }, 200);

    updateCart();
    document.getElementById('modal-box').style.display = 'none';
    
    // Feedback suara/alert minimalis
    console.log(`${p.name} berhasil ditambahkan!`);
}

// ... sisa kode JavaScript tetap sama ...